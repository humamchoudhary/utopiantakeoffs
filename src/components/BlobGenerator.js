"use client";
// pages/index.js
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [blobsConfig, setBlobsConfig] = useState([]);

  useEffect(() => {
    // Calculate how many blobs to generate based on viewport height
    const viewportHeight = window.innerHeight;
    const blobHeight = 600; // Approximate height of each blob
    const overlapFactor = 0.5; // How much blobs can overlap

    // Calculate number of blobs needed to fill the page with some overlap
    const numberOfBlobs =
      Math.ceil(viewportHeight / (blobHeight * overlapFactor)) + 2; // Add extra for good measure

    // Set minimum number of blobs
    const minBlobs = Math.max(4, numberOfBlobs);

    // Generate random configuration for blobs
    const newConfig = [];

    for (let i = 0; i < minBlobs; i++) {
      // Distribute evenly across the page height with some randomness
      const basePosition = (i * 100) / minBlobs;
      const randomOffset = Math.random() * 20 - 10; // +/- 10% random offset

      newConfig.push({
        id: `blob-${i}`,
        side: Math.random() > 0.5 ? "left" : "right", // Random side
        top: basePosition + randomOffset, // Distribute vertically with randomness
        flipped: Math.random() > 0.5, // Random flip
        color: Math.random() > 0.5 ? "#972A20" : "#444408", // Random between the two colors
        scale: 0.8 + Math.random() * 0.4, // Random size between 80% and 120%
      });
    }

    setBlobsConfig(newConfig);

    // Handle window resize
    const handleResize = () => {
      // Recalculate blob configuration on window resize
      const viewportHeight = window.innerHeight;
      const newNumberOfBlobs =
        Math.ceil(viewportHeight / (blobHeight * overlapFactor)) + 2;
      const newMinBlobs = Math.max(4, newNumberOfBlobs);

      // Only regenerate if the number of blobs needed has changed
      if (newMinBlobs !== minBlobs) {
        const resizedConfig = [];

        for (let i = 0; i < newMinBlobs; i++) {
          const basePosition = (i * 100) / newMinBlobs;
          const randomOffset = Math.random() * 20 - 10;

          resizedConfig.push({
            id: `blob-resize-${i}`,
            side: Math.random() > 0.5 ? "left" : "right",
            top: basePosition + randomOffset,
            flipped: Math.random() > 0.5,
            color: Math.random() > 0.5 ? "#972A20" : "#444408",
            scale: 0.8 + Math.random() * 0.4,
          });
        }

        setBlobsConfig(resizedConfig);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // SVG components
  const BlobSVG = ({ blob }) => {
    // Determine which SVG to use based on color
    if (blob.color === "#972A20") {
      return (
        <svg
          width="452"
          height="702"
          viewBox="0 0 452 702"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
        >
          <g filter={`url(#filter0_f_${blob.id})`}>
            <circle cx="351.231" cy="350.514" r="100.514" fill={blob.color} />
          </g>
          <defs>
            <filter
              id={`filter0_f_${blob.id}`}
              x="0.717773"
              y="0"
              width="701.027"
              height="701.027"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_2060_158"
              />
            </filter>
          </defs>
        </svg>
      );
    } else {
      return (
        <svg
          width="482"
          height="702"
          viewBox="0 0 482 702"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
        >
          <g filter={`url(#filter0_f_${blob.id})`}>
            <circle cx="350.514" cy="350.514" r="100.514" fill={blob.color} />
          </g>
          <defs>
            <filter
              id={`filter0_f_${blob.id}`}
              x="0"
              y="0"
              width="701.027"
              height="701.027"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_2060_160"
              />
            </filter>
          </defs>
        </svg>
      );
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Repeating SVG Blobs</title>
        <meta name="description" content="Repeating SVG blob decorations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* SVG Blobs */}
      {blobsConfig.map((blob) => (
        <div
          key={blob.id}
          style={{
            position: "absolute",
            [blob.side]: "-250px", // Positioning from the edge
            top: `${blob.top}vh`, // Position as percentage of viewport height
            transform: `${blob.flipped ? "scaleX(-1)" : "none"} scale(${blob.scale})`,
            zIndex: "-1",
          }}
        >
          <BlobSVG blob={blob} />
        </div>
      ))}

      {/* Page content */}
      <main>
        <h1>My Page with Repeating Blobs</h1>
        <p>
          Refresh the page to see different blob positions and orientations.
        </p>
        <div className="spacer"></div>
        <p>The blobs repeat throughout the entire page height.</p>
        <div className="spacer"></div>
        <p>Scroll down to see more blobs.</p>
        <div className="spacer"></div>
        <p>The blobs will be regenerated if you resize the window.</p>
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
          background-color: #f8f8f8;
        }

        .container {
          min-height: 200vh; /* Make the page scrollable */
          padding: 0;
          position: relative;
          overflow: hidden;
        }

        main {
          padding: 5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 10;
          position: relative;
        }

        h1 {
          margin-bottom: 2rem;
        }

        p {
          margin-bottom: 1rem;
          text-align: center;
          max-width: 600px;
        }

        .spacer {
          height: 30vh;
        }
      `}</style>
    </div>
  );
}
