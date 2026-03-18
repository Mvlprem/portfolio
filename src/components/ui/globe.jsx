"use client";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";

export default function Globe() {
  const mountRef = useRef(null);
  const [data, setData] = useState({ lat: null, lon: null });

  useEffect(() => {
    fetch("https://api.ipapi.is")
      .then((res) => res.json())
      .then((json) => {
        const lat = json.location.latitude;
        const lon = json.location.longitude;
        setData({ lat, lon });
      })
      .catch((err) => console.error("IP Fetch failed:", err));

    if (!mountRef.current) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(500, 500);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    const group = new THREE.Group();
    scene.add(group);

    // WATER
    const waterGeometry = new THREE.SphereGeometry(1.58, 64, 64);
    const waterMaterial = new THREE.MeshBasicMaterial({
      color: 0xd1d1d1,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const ocean = new THREE.Mesh(waterGeometry, waterMaterial);
    group.add(ocean);

    // SHADERS
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform sampler2D globeTexture;
      varying vec2 vUv;
      void main() {
        vec4 mapColor = texture2D(globeTexture, vUv);
        
        // This math creates the exact grid of dots seen in the CodePen
        float dots = step(0.1, mod(vUv.x * 240.0, 1.0)) * step(0.1, mod(vUv.y * 120.0, 1.0));
        
        // Discarding white pixels (water) to keep only black pixels (continents)
        if (mapColor.r > 0.5) discard; 

        // Set the color to the high-visibility green from the demo
        gl_FragColor = vec4(0.0, 0.0, 0.0, dots * 1.0);
      }
    `;

    // Function to convert Lat/Lon to 3D Cartesian coordinates
    const latLonToVector3 = (lat, lon, radius) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = lon * (Math.PI / 180);
      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const y = radius * Math.cos(phi);
      return new THREE.Vector3(x, y, z);
    };

    // LOAD MAP AND CREATE SPHERE
    const loader = new THREE.TextureLoader();
    loader.load("/world-map.svg", (tex) => {
      const geometry = new THREE.SphereGeometry(1.6, 128, 128);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          globeTexture: { value: tex },
        },
        vertexShader,
        fragmentShader,
        transparent: true,
        side: THREE.DoubleSide,
      });

      // Client Coordinates from ipapi.is
      const actualLat = data.lat;
      const actualLon = data.lon;
      const latOffset = -27;
      const lonOffset = 30;
      const Coords = latLonToVector3(
        actualLat + latOffset,
        actualLon + lonOffset,
        1.6,
      );

      // Create a small red sphere
      const dotGeo = new THREE.SphereGeometry(0.04, 12, 12);
      const dotMat = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        transparent: true,
        opacity: 0.9,
      });
      const dotMesh = new THREE.Mesh(dotGeo, dotMat);
      dotMesh.position.copy(Coords);
      group.add(dotMesh);

      // Create a "Ring" for the pulse
      const ringGeo = new THREE.RingGeometry(0.06, 0.08, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        transparent: true,
        side: THREE.DoubleSide,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);

      // Position it at the same spot and make it face outward
      ringMesh.position.copy(Coords);
      ringMesh.lookAt(new THREE.Vector3(0, 0, 0));
      group.add(ringMesh);

      const globeMesh = new THREE.Mesh(geometry, material);
      globeMesh.rotation.y = -Math.PI / 1.4;
      group.add(globeMesh);

      // camera.position.z = 6;
      const width = window.innerWidth;
      camera.position.z = width < 768 ? 8 : width < 1024 ? 8 : 6;

      // ROTATION ANIMATION
      const animate = () => {
        requestAnimationFrame(animate);
        group.rotation.y += 0.002;

        // Pulse the dot opacity and scale
        if (dotMesh) {
          const time = Date.now() * 0.002;
          const pulse = 1 + Math.sin(time) * 0.25;
          dotMesh.scale.set(pulse, pulse, pulse);
          dotMat.opacity = 0.6 + Math.sin(time * 2) * 0.4;

          const s = 1 + (time % 1) * 2;
          ringMesh.scale.set(s, s, s);
          ringMat.opacity = 1 - (time % 1);
        }

        renderer.render(scene, camera);
      };
      animate();
    });

    // Cleanup on unmount
    return () => {
      if (mountRef.current) mountRef.current.innerHTML = "";
    };
  }, [data.lat, data.lon]);

  return (
    <div className="flex items-center justify-center w-full h-[500px] bg-transparent">
      <div ref={mountRef} />
    </div>
  );
}
