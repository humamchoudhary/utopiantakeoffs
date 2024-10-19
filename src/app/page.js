"use server";
import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import WomanImage from "./assets/images/building.png";
import FileUpload from "@/components/HomeFileUpload";
import Image1 from "@/app/assets/images/1.jpeg";
import Image2 from "@/app/assets/images/2.jpeg";
import Image3 from "@/app/assets/images/3.jpeg";
import ConstructionTakeoffPage from "@/components/ConstructionTakeOff";
import CleintSlider from "@/components/ClientSlider";
import ReviewSection from "@/components/ReviewSection";
import ServiceSlider from "@/components/ServicesSlider";

export default async function Home() {
  const services = [
    {
      title: "Bid Estimates",
      description:
        "We provide accurate bid estimates for contractors and subcontractors, using location-specific material.",
      imagePath: Image1,
    },
    {
      title: "Design Estimates",
      description:
        "We provide design estimates for architects & designers. Our estimates include all stages.",
      imagePath: Image2,
    },
    {
      title: "Construction Estimator",
      description:
        "We provide accurate cost estimates for contractors and subcontractors using location-specific material.",
      imagePath: Image3,
    },
    {
      title: "Construction Estimator",
      description:
        "We provide accurate cost estimates for contractors and subcontractors using location-specific material.",
      imagePath: Image1,
    },
  ];

  const a_reviews = [
    {},
    {
      name: "Emily Rogers",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Micheal Davis",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Sarah Patel",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Sarah Patel",
      image: "/api/placeholder/50/50",
    },

    {
      name: "Sarah Patel",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Sarah Patel",
      image: "/api/placeholder/50/50",
    },
    {
      name: "Sarah Patel",
      image: "/api/placeholder/50/50",
    },
    {},
  ];
  const w_reviews = [
    {
      name: "Sarah Patel",
      post: "Architecture",
      stars: 5,
      review:
        "We’ve worked with UtopianTakeoffs for over a year, and their precision and reliability have been a game changer for our projects.",
    },
    {
      name: "John Thompson",
      post: "General Contractor",
      stars: 4.8,
      review:
        "UtopianTakeoffs provided accurate estimates and helped us win several major projects. Their team is exceptional!",
    },
    {
      name: "Sarah Patel",
      post: "Architecture",
      stars: 5,
      review:
        "We’ve worked with UtopianTakeoffs for over a year, and their precision and reliability have been a game changer for our projects.",
    },
    {
      name: "Sarah Patel",
      post: "Architecture",
      stars: 5,
      review:
        "We’ve worked with UtopianTakeoffs for over a year, and their precision and reliability have been a game changer for our projects.",
    },
    {
      name: "Sarah Patel",
      post: "Architecture",
      stars: 5,
      review:
        "We’ve worked with UtopianTakeoffs for over a year, and their precision and reliability have been a game changer for our projects.",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <ClientShowcase />
      <EstimatingServices />
      <ConstructionTakeoffPage services={services} />
      <WhyUs />
      <ServicesSection />
      <WorkWithUs />
      <GetQoute />
      <OurWork />
      <ReviewSection w_reviews={w_reviews} a_reviews={a_reviews} />
    </div>
  );
}

const ClientShowcase = () => {
  const clients = [
    {
      name: "Okta",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 197 90"
        >
          <path
            fill="#999BA2"
            d="M120.114 56.797c-4.469 0-8.58-3.753-8.58-9.175 0-5.42 4.104-9.173 8.58-9.173 2.505 0 4.69 1.11 5.847 2.946v-2.62h3.411v12.767c0 1.195.259 1.714 1.317 1.714h.639v3.228h-1.485c-1.864 0-3.334-.746-3.6-2.78-1.379 2.094-3.564 3.1-6.129 3.1v-.007Zm5.877-9.175c0-3.182-2.413-5.756-5.397-5.756-2.992 0-5.406 2.574-5.406 5.756 0 3.182 2.414 5.756 5.406 5.756 2.984 0 5.397-2.574 5.397-5.756ZM102.566 32.83h3.563v5.947h4.538v3.228h-4.538v9.538c0 1.233.259 1.714 1.515 1.714h3.023v3.228h-4.15c-2.154 0-3.95-1.204-3.95-4.104V32.83h-.001Zm-16.23 0h3.562v12.768h1.097l4.864-6.829h4.012l-5.945 8.077 7.742 9.631H97.16l-6.066-7.59h-1.196v7.59h-3.563V32.83ZM74.763 56.797c-5.025 0-9.09-4.096-9.09-9.175 0-5.07 4.065-9.167 9.09-9.167 5.032 0 9.097 4.097 9.097 9.167 0 5.078-4.065 9.175-9.097 9.175Zm5.436-9.175c0-3.182-2.43-5.756-5.436-5.756-3 0-5.428 2.574-5.428 5.756 0 3.19 2.428 5.764 5.428 5.764 3.007 0 5.436-2.574 5.436-5.764Z"
          />
        </svg>
      ),
    },

    {
      name: "accenture",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={197}
          height={90}
          fill="none"
        >
          <path
            fill="#999BA2"
            d="M109.209 21.836v3.85l7.442 2.908-7.441 2.767v3.963l12.744-5.161v-3.194l-12.745-5.133Zm44.284 24.58h5.59c-.087-2.195-1.085-3.136-2.737-3.136-1.312 0-2.509.712-2.853 3.136Zm2.967 9.496c-4.306 0-7.242-2.568-7.242-7.53V48.1c0-4.99 3.107-7.728 7.098-7.728 3.707 0 6.816 2.08 6.816 7.015v1.797h-9.694c.171 2.68 1.311 3.707 3.107 3.707 1.596 0 2.451-.855 2.738-1.939h3.849c-.456 2.822-2.766 4.96-6.672 4.96Zm-17.195-15.227h4.163v2.737c.883-1.996 2.281-2.936 4.476-2.936v4.105c-2.823 0-4.476.856-4.476 3.338v7.67h-4.163V40.686ZM136.242 55.6h-4.164v-2.197c-.713 1.426-2.109 2.51-4.335 2.51-2.679 0-4.647-1.627-4.647-5.133V40.686h4.192v9.467c0 1.71.684 2.51 2.166 2.51 1.454 0 2.624-.913 2.624-2.766v-9.21h4.164v14.912ZM117.705 36.18v4.505h2.852v3.106h-2.852v7.074c0 1.113.514 1.626 1.483 1.626.599 0 1.055-.087 1.454-.256v3.25a8.473 8.473 0 0 1-2.339.312c-3.249 0-4.79-1.482-4.79-4.505v-7.5h-1.739v-3.105h1.739V37.89l4.192-1.71Zm-20.959 4.505h4.163v2.225c.743-1.398 2.224-2.539 4.506-2.539 2.709 0 4.505 1.625 4.505 5.246V55.6h-4.164v-9.353c0-1.74-.711-2.509-2.223-2.509-1.455 0-2.624.885-2.624 2.767V55.6h-4.163V40.685Zm-12.205 5.731h5.588c-.085-2.195-1.083-3.136-2.737-3.136-1.311 0-2.508.712-2.85 3.136Zm2.966 9.496c-4.306 0-7.243-2.568-7.243-7.53V48.1c0-4.99 3.108-7.728 7.1-7.728 3.707 0 6.815 2.08 6.815 7.015v1.797h-9.695c.171 2.68 1.312 3.707 3.108 3.707 1.597 0 2.452-.855 2.738-1.939h3.85c-.458 2.822-2.767 4.96-6.673 4.96Zm-15.628 0c-4.134 0-7.128-2.568-7.128-7.615V48.1c0-5.048 3.193-7.729 7.156-7.729 3.394 0 6.188 1.712 6.53 5.617h-3.991c-.257-1.453-.998-2.394-2.452-2.394-1.77 0-2.994 1.396-2.994 4.334v.456c0 3.023 1.083 4.391 3.022 4.391 1.426 0 2.48-1.055 2.708-2.68h3.793c-.284 3.392-2.594 5.817-6.644 5.817Zm-15.513 0c-4.134 0-7.128-2.568-7.128-7.615V48.1c0-5.048 3.193-7.729 7.156-7.729 3.394 0 6.188 1.712 6.53 5.617h-3.991c-.257-1.453-.998-2.394-2.452-2.394-1.77 0-2.994 1.396-2.994 4.334v.456c0 3.023 1.083 4.391 3.022 4.391 1.426 0 2.48-1.055 2.708-2.68h3.793c-.285 3.392-2.594 5.817-6.644 5.817Zm-13.603-5.275v-1.426H41.11c-2.052 0-3.107.57-3.107 1.91v.142c0 1.028.628 1.74 2.025 1.74 1.425 0 2.736-.798 2.736-2.366Zm-3.991 5.275c-2.68 0-4.905-1.368-4.905-4.393v-.168c0-3.68 3.193-4.878 7.044-4.878h1.852v-.711c0-1.484-.656-2.397-2.195-2.397-1.397 0-2.138.8-2.254 1.94h-3.99c.284-3.309 2.907-4.934 6.445-4.934 3.59 0 6.158 1.54 6.158 5.246V55.6h-4.078v-1.712c-.714 1.084-2.082 2.025-4.077 2.025Z"
          />
        </svg>
      ),
    },

    {
      name: "contentful",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={197}
          height={90}
          fill="none"
        >
          <path
            fill="#999BA2"
            d="M62.763 48.245c1.028-.808 1.173-.35 2.08.564.445.47 1.604 1.238.867 1.911a7.864 7.864 0 0 1-11.254-.86 8.193 8.193 0 0 1-1.915-5.597 7.893 7.893 0 0 1 2.58-5.65 7.972 7.972 0 0 1 5.366-1.856 7.918 7.918 0 0 1 4.525 1.508c1.053.806.58 1.317-.262 2.152l-.554.565c-.42.431-.703.726-1.262.352a4.467 4.467 0 0 0-3.709-.81c-4.132 1.106-3.895 8.614 1.155 8.614a4.203 4.203 0 0 0 2.383-.893Zm114.717 4.117a1.272 1.272 0 0 1-1.264-1.292V34.437a1.28 1.28 0 0 1 1.264-1.291h1.341a1.278 1.278 0 0 1 1.261 1.29v16.662a1.265 1.265 0 0 1-.363.907 1.264 1.264 0 0 1-.898.385l-1.341-.029Zm-7.076-1.876a6.562 6.562 0 0 1-4.946 2.152c-4.209 0-6.209-3.552-6.209-7.536v-6.763a1.265 1.265 0 0 1 .365-.907 1.272 1.272 0 0 1 .899-.382h1.341a1.278 1.278 0 0 1 1.262 1.29v6.73a3.519 3.519 0 0 0 2.973 3.93c.165.022.333.03.499.025a3.86 3.86 0 0 0 3.71-3.987V38.34a1.28 1.28 0 0 1 1.261-1.289h1.344a1.277 1.277 0 0 1 1.262 1.29v12.784a1.255 1.255 0 0 1-.356.89 1.252 1.252 0 0 1-.881.376h-1.132a1.287 1.287 0 0 1-1.236-1.266v-.646l-.156.008ZM154.253 37.12h2.633a1.273 1.273 0 0 1 1.235 1.291v.89a1.273 1.273 0 0 1-1.235 1.273h-2.633v10.524a1.267 1.267 0 0 1-.364.908 1.292 1.292 0 0 1-.9.384h-1.342a1.277 1.277 0 0 1-1.261-1.292V36.56c-.265-3.049 1.92-5.706 4.866-5.975h2.11a1.273 1.273 0 0 1 1.235 1.291v.808a1.27 1.27 0 0 1-1.242 1.296h-1.001c-1.499 0-2.13 1.185-2.13 2.61l.029.529Zm-9.366 0h2.868a1.243 1.243 0 0 1 1.147.786c.06.153.091.316.089.48v.86a1.257 1.257 0 0 1-1.236 1.266h-2.868v6.414c0 1.239.579 1.965 1.816 1.965h.569a1.249 1.249 0 0 1 1.236 1.264v.864a1.233 1.233 0 0 1-.356.888 1.245 1.245 0 0 1-.88.375h-1.737c-3.102-.188-4.498-2.26-4.498-5.356v-12.46a1.253 1.253 0 0 1 1.236-1.266h1.315a1.253 1.253 0 0 1 1.149.785c.061.152.091.316.089.48l.061 2.655Zm-41.502 0h2.853a1.246 1.246 0 0 1 1.149.785c.061.153.092.316.089.481v.86a1.25 1.25 0 0 1-1.239 1.243h-2.78v6.437c0 1.239.58 1.965 1.816 1.965h.578a1.242 1.242 0 0 1 .882.375 1.244 1.244 0 0 1 .355.89v.863a1.25 1.25 0 0 1-.759 1.164 1.246 1.246 0 0 1-.478.1h-.867c-3.392 0-5.342-1.48-5.342-5.394V34.46a1.248 1.248 0 0 1 1.238-1.266h1.316a1.25 1.25 0 0 1 1.236 1.266v2.64l-.047.019ZM86.54 38.957a6.657 6.657 0 0 1 4.787-2.152c4.183 0 6.391 3.517 6.391 7.536v6.755a1.278 1.278 0 0 1-1.262 1.293h-1.34a1.28 1.28 0 0 1-1.264-1.291v-6.73a3.502 3.502 0 0 0-2.97-3.929 2.976 2.976 0 0 0-.5-.028 3.82 3.82 0 0 0-3.684 3.986v6.674a1.251 1.251 0 0 1-1.236 1.267h-1.314a1.251 1.251 0 0 1-1.235-1.267v-12.76a1.248 1.248 0 0 1 1.237-1.262h1.129a1.282 1.282 0 0 1 1.236 1.264l.028.644h-.003Zm41.534 0a6.668 6.668 0 0 1 4.788-2.152c4.183 0 6.392 3.517 6.392 7.536v6.755a1.283 1.283 0 0 1-1.261 1.293h-1.342a1.28 1.28 0 0 1-1.264-1.291v-6.73a3.495 3.495 0 0 0-2.971-3.929 3.006 3.006 0 0 0-.501-.028 3.83 3.83 0 0 0-3.452 2.505 3.83 3.83 0 0 0-.23 1.481v6.674a1.245 1.245 0 0 1-1.235 1.267h-1.344a1.248 1.248 0 0 1-1.236-1.267v-12.76a1.246 1.246 0 0 1 .356-.886c.232-.237.548-.372.88-.376h1.132a1.283 1.283 0 0 1 1.237 1.264v.673l.051-.029Zm-54.29-2.207c-4.157-.133-7.63 3.178-7.76 7.43v.564c0 4.416 3.499 7.973 7.787 7.973 4.29 0 7.787-3.58 7.787-7.973.131-4.279-3.13-7.857-7.313-7.994h-.5Zm37.773 9.422a3.912 3.912 0 0 0 4.294 3.014 7.166 7.166 0 0 0 2.813-.646l.422-.214c.47-.27.894-.432 1.316 0l.682.702c.212.217.423.458.605.673.633.808.185 1.023-.525 1.508a9.65 9.65 0 0 1-5.393 1.642c-4.945 0-8.232-3.068-8.232-8.181-.186-4.221 2.998-7.832 7.153-8.022h.842c4.788 0 7.551 2.878 7.63 7.806 0 1.346.077 1.775-1.29 1.775l-10.317-.057Zm-37.64-5.84a4.14 4.14 0 0 1 3.986 4.279v.098a4.034 4.034 0 0 1-3.556 4.397 3.986 3.986 0 0 1-4.286-3.66 3.433 3.433 0 0 1 0-.727 4.003 4.003 0 0 1 3.63-4.362h.289l-.064-.025Zm37.826 2.501h7.681a3.302 3.302 0 0 0-3.735-2.743 4.014 4.014 0 0 0-3.946 2.743Zm-82.628-10.64a4.58 4.58 0 0 1 1.172 4.478 9.262 9.262 0 0 1 4.778-1.323h.035a9.303 9.303 0 0 1 6.582 2.76 3.661 3.661 0 0 0 6.02-3.966 3.665 3.665 0 0 0-.82-1.192 16.599 16.599 0 0 0-11.76-4.925h-.063a16.56 16.56 0 0 0-9.286 2.826h.103a4.55 4.55 0 0 1 3.239 1.341Zm15.1 18.037a3.655 3.655 0 0 0-2.58 1.061A9.298 9.298 0 0 1 35.07 54h-.035a9.24 9.24 0 0 1-4.783-1.344 4.58 4.58 0 0 1-4.415 5.804h-.12a16.555 16.555 0 0 0 9.293 2.873h.063a16.574 16.574 0 0 0 11.724-4.836 3.662 3.662 0 0 0-2.58-6.263l-.002-.004Zm-21.622.41a4.545 4.545 0 0 1 3.24-1.341c.418 0 .835.056 1.239.168a9.299 9.299 0 0 1 .018-9.614 4.583 4.583 0 0 1-5.793-4.423v-.124a16.651 16.651 0 0 0-.044 18.669v-.097a4.548 4.548 0 0 1 1.34-3.238Z"
          />
          <path
            fill="#999BA2"
            d="M25.877 31.665c-1.04 0-1.77.432-2.653 1.316-.843.84-1.108 1.576-1.11 2.45a3.762 3.762 0 1 0 3.763-3.766Zm-3.816 22.219c0 1.04.43 1.77 1.313 2.652.842.842 1.575 1.11 2.45 1.111a3.75 3.75 0 1 0-3.764-3.751v-.012Z"
          />
        </svg>
      ),
    },

    {
      name: "shopify",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={197}
          height={90}
          fill="none"
        >
          <path
            fill="#999BA2"
            d="M79.635 46.438c-1.07-.597-1.633-1.081-1.633-1.764 0-.882.76-1.422 1.973-1.422 1.408 0 2.648.596 2.648.596l.987-3.044s-.902-.712-3.578-.712c-3.72 0-6.314 2.163-6.314 5.18 0 1.707 1.212 3.016 2.819 3.954 1.296.74 1.747 1.28 1.747 2.049 0 .825-.649 1.48-1.86 1.48-1.803 0-3.494-.94-3.494-.94l-1.043 3.045s1.578 1.053 4.199 1.053c3.832 0 6.565-1.907 6.565-5.32.057-1.879-1.353-3.188-3.016-4.155Zm15.274-6.403c-1.888 0-3.353.91-4.508 2.277l-.057-.028 1.635-8.65h-4.283l-4.143 21.995h4.255l1.409-7.512c.563-2.845 2.001-4.581 3.353-4.581.958 0 1.325.654 1.325 1.593 0 .598-.056 1.31-.197 1.907l-1.607 8.622h4.255l1.663-8.878c.197-.94.31-2.049.31-2.817.056-2.477-1.183-3.928-3.41-3.928Zm13.103 0c-5.128 0-8.538 4.667-8.538 9.874 0 3.33 2.029 6.032 5.861 6.032 5.044 0 8.425-4.552 8.425-9.874.029-3.101-1.747-6.032-5.748-6.032Zm-2.085 12.577c-1.467 0-2.057-1.252-2.057-2.817 0-2.475 1.268-6.488 3.578-6.488 1.522 0 2.001 1.31 2.001 2.59 0 2.675-1.268 6.715-3.522 6.715Zm18.767-12.577c-2.875 0-4.509 2.561-4.509 2.561h-.056l.254-2.305h-3.777c-.196 1.565-.535 3.927-.873 5.72l-2.959 15.708h4.255l1.184-6.374h.084s.873.569 2.508.569c5.016 0 8.285-5.178 8.285-10.415 0-2.873-1.269-5.464-4.396-5.464Zm-4.059 12.663c-1.098 0-1.746-.626-1.746-.626l.705-4.012c.506-2.676 1.887-4.468 3.352-4.468 1.297 0 1.691 1.223 1.691 2.361 0 2.761-1.634 6.745-4.002 6.745Zm14.541-18.837c-1.353 0-2.451 1.081-2.451 2.504 0 1.28.789 2.162 2 2.162h.057c1.324 0 2.479-.91 2.508-2.503.028-1.28-.818-2.163-2.114-2.163Zm-5.974 21.767h4.283l2.903-15.251h-4.311l-2.875 15.251Zm18.006-15.28h-2.959l.141-.711c.254-1.48 1.099-2.788 2.537-2.788.76 0 1.352.227 1.352.227l.845-3.357s-.732-.37-2.31-.37c-1.522 0-3.016.427-4.17 1.423-1.466 1.252-2.143 3.044-2.481 4.865l-.113.711h-1.971l-.621 3.244h1.973l-2.254 12.037h4.254l2.255-12.037h2.931l.591-3.244Zm10.257.029s-2.676 6.772-3.86 10.471h-.057c-.084-1.195-1.042-10.471-1.042-10.471h-4.481l2.565 14c.056.312.028.511-.085.71a7.44 7.44 0 0 1-2.31 2.59c-.789.597-1.691.967-2.395 1.223l1.182 3.643c.875-.2 2.65-.91 4.172-2.333 1.943-1.85 3.747-4.667 5.578-8.537l5.213-11.296h-4.48Zm-100.26-9.903s-.393.114-1.042.313a8.378 8.378 0 0 0-.507-1.252c-.733-1.422-1.831-2.19-3.127-2.19-.085 0-.17 0-.282.028-.029-.057-.084-.085-.113-.142-.563-.626-1.297-.91-2.17-.882-1.69.057-3.381 1.28-4.733 3.47-.96 1.537-1.691 3.472-1.888 4.98-1.945.599-3.298 1.025-3.327 1.054-.984.313-1.013.341-1.127 1.28a19651.4 19651.4 0 0 1-2.676 20.744l21.304 3.727V30.446c-.17 0-.254.028-.311.028Zm-4.93 1.537c-1.127.341-2.367.74-3.578 1.11.337-1.338 1.013-2.675 1.802-3.556.311-.314.733-.684 1.213-.912.479 1.025.59 2.419.563 3.358Zm-2.31-4.496c.393 0 .732.086 1.013.256-.45.228-.901.598-1.324 1.025-1.07 1.166-1.887 2.987-2.225 4.724-1.016.312-2.03.626-2.959.91.62-2.732 2.902-6.858 5.494-6.915Zm-3.27 15.65c.113 1.821 4.876 2.22 5.158 6.517.197 3.385-1.776 5.69-4.622 5.86-3.438.228-5.326-1.82-5.326-1.82l.733-3.13s1.888 1.451 3.41 1.337c.985-.056 1.352-.882 1.324-1.45-.141-2.39-4.03-2.248-4.283-6.176-.225-3.3 1.915-6.63 6.65-6.942 1.832-.114 2.762.341 2.762.341L51.429 41.8s-1.211-.569-2.648-.455c-2.085.142-2.114 1.48-2.085 1.821Zm6.707-11.496c0-.853-.113-2.077-.508-3.1 1.297.255 1.916 1.706 2.199 2.588a47.8 47.8 0 0 0-1.69.512Zm4.762 29.878 8.848-2.219s-3.804-25.979-3.832-26.15c-.028-.17-.17-.285-.31-.285-.14 0-2.621-.057-2.621-.057s-1.521-1.48-2.085-2.049v30.76Z"
          />
        </svg>
      ),
    },

    {
      name: "accenture",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={197}
          height={90}
          fill="none"
        >
          <path
            fill="#999BA2"
            d="M109.209 21.836v3.85l7.442 2.908-7.441 2.767v3.963l12.744-5.161v-3.194l-12.745-5.133Zm44.284 24.58h5.59c-.087-2.195-1.085-3.136-2.737-3.136-1.312 0-2.509.712-2.853 3.136Zm2.967 9.496c-4.306 0-7.242-2.568-7.242-7.53V48.1c0-4.99 3.107-7.728 7.098-7.728 3.707 0 6.816 2.08 6.816 7.015v1.797h-9.694c.171 2.68 1.311 3.707 3.107 3.707 1.596 0 2.451-.855 2.738-1.939h3.849c-.456 2.822-2.766 4.96-6.672 4.96Zm-17.195-15.227h4.163v2.737c.883-1.996 2.281-2.936 4.476-2.936v4.105c-2.823 0-4.476.856-4.476 3.338v7.67h-4.163V40.686ZM136.242 55.6h-4.164v-2.197c-.713 1.426-2.109 2.51-4.335 2.51-2.679 0-4.647-1.627-4.647-5.133V40.686h4.192v9.467c0 1.71.684 2.51 2.166 2.51 1.454 0 2.624-.913 2.624-2.766v-9.21h4.164v14.912ZM117.705 36.18v4.505h2.852v3.106h-2.852v7.074c0 1.113.514 1.626 1.483 1.626.599 0 1.055-.087 1.454-.256v3.25a8.473 8.473 0 0 1-2.339.312c-3.249 0-4.79-1.482-4.79-4.505v-7.5h-1.739v-3.105h1.739V37.89l4.192-1.71Zm-20.959 4.505h4.163v2.225c.743-1.398 2.224-2.539 4.506-2.539 2.709 0 4.505 1.625 4.505 5.246V55.6h-4.164v-9.353c0-1.74-.711-2.509-2.223-2.509-1.455 0-2.624.885-2.624 2.767V55.6h-4.163V40.685Zm-12.205 5.731h5.588c-.085-2.195-1.083-3.136-2.737-3.136-1.311 0-2.508.712-2.85 3.136Zm2.966 9.496c-4.306 0-7.243-2.568-7.243-7.53V48.1c0-4.99 3.108-7.728 7.1-7.728 3.707 0 6.815 2.08 6.815 7.015v1.797h-9.695c.171 2.68 1.312 3.707 3.108 3.707 1.597 0 2.452-.855 2.738-1.939h3.85c-.458 2.822-2.767 4.96-6.673 4.96Zm-15.628 0c-4.134 0-7.128-2.568-7.128-7.615V48.1c0-5.048 3.193-7.729 7.156-7.729 3.394 0 6.188 1.712 6.53 5.617h-3.991c-.257-1.453-.998-2.394-2.452-2.394-1.77 0-2.994 1.396-2.994 4.334v.456c0 3.023 1.083 4.391 3.022 4.391 1.426 0 2.48-1.055 2.708-2.68h3.793c-.284 3.392-2.594 5.817-6.644 5.817Zm-15.513 0c-4.134 0-7.128-2.568-7.128-7.615V48.1c0-5.048 3.193-7.729 7.156-7.729 3.394 0 6.188 1.712 6.53 5.617h-3.991c-.257-1.453-.998-2.394-2.452-2.394-1.77 0-2.994 1.396-2.994 4.334v.456c0 3.023 1.083 4.391 3.022 4.391 1.426 0 2.48-1.055 2.708-2.68h3.793c-.285 3.392-2.594 5.817-6.644 5.817Zm-13.603-5.275v-1.426H41.11c-2.052 0-3.107.57-3.107 1.91v.142c0 1.028.628 1.74 2.025 1.74 1.425 0 2.736-.798 2.736-2.366Zm-3.991 5.275c-2.68 0-4.905-1.368-4.905-4.393v-.168c0-3.68 3.193-4.878 7.044-4.878h1.852v-.711c0-1.484-.656-2.397-2.195-2.397-1.397 0-2.138.8-2.254 1.94h-3.99c.284-3.309 2.907-4.934 6.445-4.934 3.59 0 6.158 1.54 6.158 5.246V55.6h-4.078v-1.712c-.714 1.084-2.082 2.025-4.077 2.025Z"
          />
        </svg>
      ),
    },
  ];
  return <CleintSlider clients={clients} />;
};

const EstimatingServices = () => {
  const services = [
    {
      title: "Certified Estimators for Every Project",
      description:
        "Precise estimates for residential, commercial, and industrial projects, following guidelines by the American Estimators Organization and AACE.",
      color: "bg-purple-100",
    },
    {
      title: "Professional Estimating Services",
      description:
        "With 15 years in the industry, Unigan MetalBiz expert estimators deliver precise material estimates across all construction trades, ensuring timely and accurate results.",
      color: "bg-pink-100",
    },
    {
      title: "Cutting-Edge Tools at Competitive Prices",
      description:
        "Using Planswift, Bluebeam, RS Means,& more, UtopianTakeoffs delivers quality estimates with zip-code-based pricing. Get affordable, accurate estimates all under one roof.",
      color: "bg-green-100",
    },
  ];

  return (
    <div className="bg-[#13151B] w-full px-16 py-20 rounded-3xl">
      <h2 className="text-[#CAA4A2] text-xl font-semibold text-center">
        Here You Check
      </h2>
      <h2 className="text-[#E4E4E4] text-[40px] font-semibold text-center mb-[102px]">
        Our Estimating Services
      </h2>
      <div className="flex flex-row justify-center gap-12">
        <div className="w-full lg:w-auto space-y-4 flex-shrink-0">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} rounded-3xl w-full relative px-7 py-8 lg:w-[654px]  flex-shrink-0`}
            >
              <h3 className="text-2xl text-fg font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-fg text-[18px] mt-4 mr-4 leading-9">
                {service.description}
              </p>
              <p className="text-6xl font-semibold absolute right-7 top-5  text-[#13151B] opacity-20">
                {index + 1}
              </p>
            </div>
          ))}
        </div>
        <div className="w-[600px] aspect-auto rounded-3xl overflow-hidden  relative">
          <Image
            src={WomanImage}
            alt="Estimating services illustration"
            className="rounded-lg object-cover h-full"
          />
          <div className="absolute w-full  h-full bottom-0 bg-gradient-to-b from-transparent to-[#13151B] to-98% "></div>
        </div>
      </div>
    </div>
  );
};

async function WhyUs() {
  const info = [
    {
      title: "Fast Turnaround",
      desc: "Estimates and takeoffs delivered in 24-48 hours.",
    },
    {
      title: "Affordable Pricing",
      desc: "Estimates from $200, based on scope.",
    },
    {
      title: "Accurate Estimates",
      desc: "Precision with advanced software and cost databases.",
    },
    {
      title: "Certified Experts",
      desc: "Skilled estimators using top industry tools.",
    },
    {
      title: "92% Bid Success",
      desc: "EOver 92% success rate based on past contractor bids.",
    },
    {
      title: "Skilled Team",
      desc: "Our team includes estimators, engineers, and field experts.",
    },
  ];

  return (
    <div className="w-full rounded-[23px] flex flex-col items-center py-20 px-24 bg-fg">
      <p className="text-[#CAA4A2] text-xl font-semibold text-center">
        Why Many Clients
      </p>
      <h3 className="text-[40px] text-[#E4E4E4] font-semibold text-center">
        Choose UtopianTakeoffs?
      </h3>
      <p className="text-[#B0B0B0] text-2xl leading-10 text-center mt-4 w-[873px] mb-20">
        Contractors save time and estimating costs with our expert services,
        helping them bid more and win jobs successfully.
      </p>
      <div className="grid grid-cols-3 gap-6">
        {info.map((item, index) => (
          <div
            key={index}
            className="flex p-6 flex-col bg-[#26272D] gap-4 border-[#4E4E4E] border rounded-[24px]"
          >
            <div className="bg-[#70332F] border border-[#9B5854] p-5 w-min h-min rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M25.4179 4.27097C27.5308 3.22469 28.5873 2.70156 29.3013 3.17654C30.0151 3.65153 29.9136 4.81007 29.7106 7.12715L29.6581 7.72659C29.6004 8.38505 29.5716 8.71426 29.6746 9.01268C29.7775 9.3111 30.0007 9.54493 30.4471 10.0126L30.8536 10.4384C32.4244 12.0841 33.2098 12.907 32.9509 13.7502C32.692 14.5933 31.5603 14.8983 29.2968 15.5083L28.7112 15.6662C28.068 15.8396 27.7464 15.9263 27.4899 16.1276C27.2335 16.3289 27.0712 16.6221 26.7466 17.2084L26.4511 17.7422C25.309 19.8057 24.7381 20.8374 23.8642 20.8834C22.9903 20.9295 22.3923 19.9594 21.1963 18.0195L20.887 17.5176C20.5471 16.9662 20.3772 16.6906 20.1157 16.5166C19.8543 16.3426 19.5307 16.29 18.8838 16.1847L18.2947 16.0889C16.0182 15.7183 14.8797 15.5331 14.5986 14.7184C14.3174 13.9038 15.0796 12.9992 16.6039 11.1902L16.9983 10.7222C17.4315 10.2081 17.6481 9.95105 17.7429 9.64218C17.8377 9.33333 17.8 9.00762 17.7247 8.35618L17.6562 7.76313C17.3913 5.47074 17.2588 4.32455 17.9589 3.77496C18.6589 3.22538 19.728 3.63638 21.8659 4.45836L22.4191 4.67103C23.0266 4.90461 23.3305 5.0214 23.6506 5.00451C23.9707 4.98762 24.2709 4.83897 24.8713 4.54164L25.4179 4.27097Z"
                  fill="#E4E4E4"
                />
                <path
                  d="M13.5668 16.9805C8.98573 19.9046 4.90667 25.1951 3.13621 30.0482C2.56178 31.6227 3.88604 33.0009 5.57502 33.0009H7.125C7.12511 32.4747 7.24836 31.8209 7.43058 31.1346C7.61814 30.4283 7.88829 29.6145 8.22501 28.7424C8.89832 26.9988 9.85587 24.9758 11.0043 23.0478C12.1486 21.1268 13.5093 19.2549 15.0018 17.8488C15.0387 17.814 15.0759 17.7795 15.1131 17.745C15.078 17.7344 15.0434 17.7236 15.0093 17.7126C14.5829 17.5754 14.05 17.357 13.5668 16.9805Z"
                  fill="#E4E4E4"
                />
                <path
                  d="M18.0303 18.3259C17.5522 18.6184 17.0557 19.005 16.5447 19.4865C15.2594 20.6974 14.0221 22.3782 12.9373 24.1993C11.8567 26.0134 10.9538 27.9219 10.324 29.5528C10.0091 30.3682 9.76704 31.1026 9.60524 31.7119C9.43835 32.3406 9.37512 32.7696 9.375 33.0009H13.6246C13.6247 31.3149 14.2086 28.1923 15.2653 25.0632C16.0408 22.7671 17.1145 20.3332 18.4983 18.4021L18.0303 18.3259Z"
                  fill="#E4E4E4"
                />
                <path
                  d="M19.9478 20.2705C18.9342 21.8361 18.0713 23.7885 17.3976 25.7836C16.3808 28.7946 15.8753 31.6567 15.875 33.0013H17.8082C19.4972 33.0013 20.8569 31.6417 20.9694 29.971C21.1626 27.0999 21.6059 24.5121 22.1122 22.6717C21.611 22.3774 21.2237 21.9907 20.9389 21.6562C20.6104 21.2706 20.2799 20.7889 19.9478 20.2705Z"
                  fill="#E4E4E4"
                />
              </svg>
            </div>
            <div className="">
              <p className="text-semibold text-2xl text-[#E4E4E4] font-bold">
                {item.title}
              </p>
              <p className=" leading-8 text-xl text-[#A8A8A8] font-semibold">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

async function ServicesSection() {
  const services1 = [
    { name: "MEP Estimating Services", color: "#A51818" },
    { name: "Concrete Estimating Services", color: "#431412" },
    { name: "Painting Estimating Services", color: "#FFD2D1", text: "#13151B" },
    { name: "Steel Estimating/ Detailing", color: "#124317" },
    { name: "Masonry Takeoffs", color: "#1A6021" },
    { name: "Drywall Takeoffs", color: "#A51818" },
    { name: "Sitework and Earthwork Takeoffs", color: "#A51818" },
  ];
  const services2 = [
    { name: "MEP Estimating Services", color: "#A51818" },
    { name: "Concrete Estimating Services", color: "#431412" },
    { name: "Painting Estimating Services", color: "#FFD2D1", text: "#13151B" },
    { name: "Steel Estimating/ Detailing", color: "#124317" },
    { name: "Masonry Takeoffs", color: "#1A6021" },
    { name: "Drywall Takeoffs", color: "#A51818" },
    { name: "Sitework and Earthwork Takeoffs", color: "#A51818" },
  ];
  return (
    <div className="overflow-hidden  py-20 ">
      <div>
        <p className="text-primary text-xl font-semibold text-center">
          What We Provide
        </p>

        <h3 className="text-[40px] text-fg font-semibold text-center">
          Utopian Takeoffs
        </h3>
        <p className="text-[#475464] text-2xl leading-10 text-center mt-4 w-[873px] mx-auto  mb-20">
          Our construction estimators have expertise in construction takeoffs in
          all CSI divisions. Some of them are listed below:
        </p>
      </div>
      <div className="overflow-hidden mx-auto w-[1200px] relative">
        <ServiceSlider services={services1} rtl={true} />
        <div className="h-[27px]" />
        <ServiceSlider services={services1} rtl={false} />
        <div className="fade" />
      </div>
    </div>
  );
}

async function WorkWithUs() {
  return (
    <div className="px-12 w-full">
      <div className="relative w-full flex flex-col justify-center items-center bg-primary rounded-3xl py-[72px]">
        <div className="absolute right-0 bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1119"
            height="342"
            viewBox="0 0 1119 342"
            fill="none"
          >
            <path
              d="M302.559 146.38C24.0127 143.246 0 342 0 342H1139V0C1139 0 1062.96 191.592 851.649 232.775C640.337 273.958 581.106 149.513 302.559 146.38Z"
              fill="white"
              fill-opacity="0.04"
            />
          </svg>
        </div>
        <div className="px-5 py-3 mb-5 border border-bg rounded-xl">
          <p className="text-lg text-bg font-semibold leading-[normal]">
            Save 30% Now
          </p>
        </div>
        <p className="text-[#E4E4E4] mx-[340px] w-[664px] font-semibold text-[32px] text-center">
          Work With Us! We Are A Global Network Of Construction Cost Expert
        </p>
        <div className="px-[32px] py-4 mt-7  mb-[100px] bg-bg rounded-xl">
          <p className="text-lg text-primary font-semibold leading-[normal]">
            Get Quotes Now
          </p>
        </div>
      </div>
    </div>
  );
}

const GetQoute = () => {
  return (
    <div className="mt-[120px] px-[72px] flex flex-col justify-center items-center">
      <div className="w-full ">
        <p className="text-center font-semibold text-xl text-[#601E1A]">
          How To Begin With Us
        </p>
        <h1 className="text-center font-semibold text-[40px] text-[#13151B]">
          Construction Estimate & Quantity Takeoff
        </h1>
        <p className="text-center text-2xl leading-10 text-[#475464]">
          Get precise construction estimates and quantity takeoffs, tailored to
          your project needs, delivered quickly and accurately by our expert
          team.
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={253}
        height={86}
        fill="none"
        className="mt-[37px]"
      >
        <path
          fill="#601E1A"
          d="M.095 83.702a1 1 0 1 0 1.81.852l-1.81-.852Zm248.097-15.621a1 1 0 0 0 1.26-.643l2.772-8.563a.999.999 0 1 0-1.902-.616l-2.465 7.611-7.611-2.464a1 1 0 1 0-.616 1.902l8.562 2.773ZM3.487 81.333a1 1 0 0 0-1.78-.912l1.78.912Zm1.718-7.187a1 1 0 0 0 1.711 1.036l-1.71-1.036Zm5.578-4.842a1 1 0 1 0-1.627-1.163l1.627 1.163Zm2.789-6.848a1 1 0 1 0 1.528 1.29l-1.528-1.29Zm6.291-3.89a1 1 0 0 0-1.412-1.416l1.412 1.416Zm3.914-6.285a1 1 0 1 0 1.283 1.535l-1.283-1.535Zm6.882-2.734a1 1 0 1 0-1.14-1.644l1.14 1.644Zm4.974-5.487a1 1 0 0 0 .987 1.739l-.987-1.74Zm7.262-1.46a1 1 0 1 0-.829-1.82l.829 1.82Zm5.865-4.52a1 1 0 1 0 .667 1.886l-.667-1.885Zm7.404-.18a1 1 0 0 0-.506-1.935l.506 1.935Zm6.54-3.471a1 1 0 1 0 .346 1.97l-.347-1.97Zm7.332 1.021a1 1 0 1 0-.191-1.99l.19 1.99Zm6.998-2.404a1 1 0 0 0 .039 2l-.04-2Zm7.089 2.126a1 1 0 0 0 .11-1.997l-.11 1.997Zm7.297-1.326a1 1 0 0 0-.26 1.983l.26-1.983Zm6.695 3.171a1 1 0 1 0 .414-1.956l-.414 1.956Zm7.386-.184a1 1 0 1 0-.573 1.916l.573-1.916Zm6.09 4.247a1 1 0 1 0 .75-1.854l-.75 1.854Zm7.285 1.214a1 1 0 1 0-.955 1.757l.955-1.757Zm4.929 5.538a1 1 0 1 0 1.217-1.587l-1.217 1.587Zm6.508 3.536a1 1 0 1 0-1.576 1.231l1.576-1.23Zm1.251 7.143a1 1 0 1 0 1.972-.333l-1.972.333Zm.515 7.19a1 1 0 1 0-1.719-1.022l1.719 1.021Zm-6.359 3.789a1 1 0 0 0 1.156 1.633l-1.156-1.633Zm-5.987 4.1a1 1 0 1 0 .045-2l-.045 2Zm-5.583-4.535a1 1 0 0 0-1.37 1.457l1.37-1.457Zm-5.618-4.598a1 1 0 0 0 1.803-.866l-1.803.866Zm-.444-7.318a1 1 0 1 0-1.944.47l1.944-.47Zm-3.063-6.659a1 1 0 0 0 1.994-.158l-1.994.158Zm1.931-7.077a1 1 0 1 0-1.996-.12l1.996.12Zm-1.076-7.255a1 1 0 1 0 1.961.392l-1.961-.392Zm3.793-6.273a1 1 0 1 0-1.885-.67l1.885.67Zm1.045-7.26a1 1 0 0 0 1.758.955l-1.758-.954Zm5.537-4.793a1 1 0 0 0-1.571-1.238l1.571 1.238Zm3.384-6.49a1 1 0 1 0 1.326 1.497l-1.326-1.497Zm6.86-2.585a1 1 0 1 0-1.041-1.708l1.041 1.708Zm5.404-4.926a1 1 0 0 0 .745 1.856l-.745-1.856Zm7.343-.232a1 1 0 1 0-.465-1.945l.465 1.945Zm6.577-3.16a1 1 0 1 0 .221 1.987l-.221-1.988Zm7.193 1.579a1 1 0 1 0-.027-2l.027 2Zm7.01-1.8a1 1 0 1 0-.141 1.995l.141-1.995Zm6.686 2.77a1 1 0 0 0 .309-1.976l-.309 1.976Zm7.228-.59a1 1 0 1 0-.474 1.943l.474-1.943Zm6.138 3.85a1 1 0 0 0 .632-1.897l-.632 1.897Zm7.214.587a1 1 0 1 0-.778 1.843l.778-1.843Zm5.47 4.762a1 1 0 0 0 .912-1.78l-.912 1.78Zm7.056 1.645a1 1 0 0 0-1.033 1.713l1.033-1.713Zm4.754 5.466a1 1 0 1 0 1.141-1.643l-1.141 1.643Zm6.792 2.541a1 1 0 1 0-1.237 1.572l1.237-1.572Zm4.065 5.989a1 1 0 1 0 1.322-1.501l-1.322 1.5Zm6.476 3.28a1 1 0 1 0-1.397 1.431l1.397-1.431Zm3.429 6.374a1 1 0 1 0 1.463-1.363l-1.463 1.363Zm6.13 3.885a1 1 0 1 0-1.524 1.295l1.524-1.295Zm2.848 6.672a1 1 0 0 0 1.579-1.228l-1.579 1.228Zm5.766 4.397a1 1 0 1 0-1.629 1.16l1.629-1.16Zm2.26 6.879a1 1 0 1 0 1.678-1.088l-1.678 1.088Zm5.343 4.874a1 1 0 1 0-1.73 1.002l1.73-1.002ZM1.905 84.554a105.982 105.982 0 0 1 1.582-3.221l-1.78-.912a108.046 108.046 0 0 0-1.612 3.281l1.81.852Zm5.011-9.372a92.636 92.636 0 0 1 3.867-5.878L9.156 68.14a94.64 94.64 0 0 0-3.95 6.005l1.71 1.036ZM15.1 63.747a82.68 82.68 0 0 1 4.763-5.181l-1.412-1.416a84.74 84.74 0 0 0-4.88 5.306l1.529 1.29Zm9.96-9.931a78.343 78.343 0 0 1 5.6-4.27l-1.14-1.643a80.327 80.327 0 0 0-5.743 4.378l1.283 1.535Zm11.56-8.017a79.048 79.048 0 0 1 6.275-3.199l-.829-1.82a81.011 81.011 0 0 0-6.433 3.28l.987 1.739Zm12.807-5.833a83.545 83.545 0 0 1 6.737-2.066l-.506-1.935a85.579 85.579 0 0 0-6.898 2.116l.667 1.885Zm13.623-3.568a89.816 89.816 0 0 1 6.986-.948l-.191-1.99c-2.37.227-4.754.548-7.142.968l.347 1.97Zm14.023-1.353a94.084 94.084 0 0 1 7.05.127l.11-1.997a96.042 96.042 0 0 0-7.2-.13l.04 2Zm14.086.784a91.19 91.19 0 0 1 6.956 1.188l.414-1.956a93.183 93.183 0 0 0-7.109-1.215l-.26 1.983Zm13.769 2.92a75.487 75.487 0 0 1 6.663 2.33l.75-1.853a77.331 77.331 0 0 0-6.84-2.393l-.573 1.916Zm12.993 5.302c2.19 1.192 4.162 2.46 5.884 3.781l1.217-1.587c-1.814-1.392-3.876-2.716-6.146-3.95l-.955 1.756Zm10.816 8.548c1.547 1.982 2.499 3.975 2.827 5.912l1.972-.333c-.396-2.343-1.526-4.637-3.223-6.81l-1.576 1.231Zm1.623 12.08c-.52.876-1.203 1.75-2.067 2.614l1.414 1.414c.968-.968 1.758-1.972 2.372-3.007l-1.719-1.02Zm-2.067 2.614a19.977 19.977 0 0 1-2.573 2.197l1.156 1.633a22.023 22.023 0 0 0 2.831-2.416l-1.414-1.414Zm-8.515 4.297c-2.014-.046-3.912-.922-5.628-2.535l-1.37 1.457c1.995 1.875 4.345 3.018 6.953 3.077l.045-2Zm-9.443-8c-.913-1.9-1.673-4.075-2.247-6.45l-1.944.468c.602 2.494 1.406 4.804 2.388 6.849l1.803-.866Zm-3.316-13.268a49.892 49.892 0 0 1-.063-6.919l-1.996-.12c-.147 2.456-.12 4.87.065 7.197l1.994-.158Zm.822-13.782a48.036 48.036 0 0 1 1.832-6.665l-1.885-.67a49.998 49.998 0 0 0-1.908 6.943l1.961.392Zm4.635-12.97a40.52 40.52 0 0 1 3.779-5.748l-1.571-1.238a42.603 42.603 0 0 0-3.966 6.032l1.758.954Zm8.489-10.74a38.703 38.703 0 0 1 5.534-4.083l-1.041-1.708a40.704 40.704 0 0 0-5.819 4.293l1.326 1.497Zm11.683-7.153a47.187 47.187 0 0 1 6.598-2.088l-.465-1.945a49.13 49.13 0 0 0-6.878 2.177l.745 1.856Zm13.396-3.26a63.541 63.541 0 0 1 3.511-.29l-.11-1.998a65.598 65.598 0 0 0-3.622.3l.221 1.987Zm3.511-.29a83.35 83.35 0 0 1 3.461-.12l-.027-2a85.296 85.296 0 0 0-3.544.122l.11 1.997Zm10.33.076c2.318.164 4.594.425 6.827.775l.309-1.976a82.96 82.96 0 0 0-6.995-.794l-.141 1.995Zm13.581 2.128c2.251.55 4.456 1.19 6.612 1.907l.632-1.897a86.084 86.084 0 0 0-6.77-1.953l-.474 1.943Zm13.048 4.337a93.056 93.056 0 0 1 6.248 2.919l.912-1.78a95.084 95.084 0 0 0-6.382-2.982l-.778 1.843Zm12.271 6.277a107.398 107.398 0 0 1 5.787 3.753l1.141-1.643a109.764 109.764 0 0 0-5.895-3.823l-1.033 1.713Zm11.342 7.866a125.055 125.055 0 0 1 5.302 4.417l1.322-1.501a127.777 127.777 0 0 0-5.387-4.488l-1.237 1.572Zm10.381 9.128a144.336 144.336 0 0 1 4.826 4.943l1.463-1.363a145.83 145.83 0 0 0-4.892-5.011l-1.397 1.431Zm9.432 10.123a159.143 159.143 0 0 1 4.372 5.377l1.579-1.228a162.597 162.597 0 0 0-4.427-5.444l-1.524 1.295Zm8.509 10.934a158.97 158.97 0 0 1 3.889 5.719l1.678-1.088a160.143 160.143 0 0 0-3.938-5.79l-1.629 1.16Zm7.502 11.595a91.424 91.424 0 0 1 1.558 2.8l.077.147.019.036.004.008.001.002.89-.454.891-.455-.001-.002-.001-.003a2.777 2.777 0 0 1-.027-.052l-.083-.157a92.138 92.138 0 0 0-1.598-2.872l-1.73 1.002Z"
        />
      </svg>
      <div className="flex w-full flex-row gap-[40px]">
        <div className="w-full flex flex-col gap-9">
          <div className="flex flex-row gap-8">
            <div className="flex items-center flex-col">
              <div className="bg-primary rounded-full px-[25px] py-3 text-[32px] text-bg leading-[normal]">
                1
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={4}
                height={92}
                fill="none"
              >
                <path
                  fill="#601E1A"
                  d="M.5 90a1.5 1.5 0 0 0 3 0h-3Zm0-90v2.813h3V0h-3Zm0 8.438v5.624h3V8.439h-3Zm0 11.25v5.625h3v-5.625h-3Zm0 11.25v5.625h3v-5.626h-3Zm0 11.25v5.624h3v-5.624h-3Zm0 11.25v5.624h3v-5.624h-3Zm0 11.25v5.624h3v-5.624h-3Zm0 11.25v5.624h3v-5.624h-3Zm0 11.25V90h3v-2.813h-3Z"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center gap-[9px]">
              <p className="text-2xl font-bold leading-[normal]">
                Submit Your Drawing Plans
              </p>
              <p className="text-xl text-[#475464] leading-9">
                Submit your PDF drawings, and we'll provide a quote with
                invoice, turnaround time, and delivery date.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <div className="flex items-center flex-col">
              <div className="bg-primary rounded-full px-[22px] py-3 text-[32px] text-bg leading-[normal]">
                2
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={4}
                height={92}
                fill="none"
              >
                <path
                  fill="#601E1A"
                  d="M.5 90a1.5 1.5 0 0 0 3 0h-3Zm0-90v2.813h3V0h-3Zm0 8.438v5.624h3V8.439h-3Zm0 11.25v5.625h3v-5.625h-3Zm0 11.25v5.625h3v-5.626h-3Zm0 11.25v5.624h3v-5.624h-3Zm0 11.25v5.624h3v-5.624h-3Zm0 11.25v5.624h3v-5.624h-3Zm0 11.25v5.624h3v-5.624h-3Zm0 11.25V90h3v-2.813h-3Z"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center gap-[9px]">
              <p className="text-2xl font-bold leading-[normal]">
                Submit Your Drawing Plans
              </p>
              <p className="text-xl text-[#475464] leading-9">
                Submit your PDF drawings, and we'll provide a quote with
                invoice, turnaround time, and delivery date.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <div className="flex items-center flex-col">
              <div className="bg-primary rounded-full px-[22px] py-3 text-[32px] text-bg leading-[normal]">
                3
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={4}
                height={92}
                fill="none"
              >
                <path
                  fill="#601E1A"
                  d="M.5 90a1.5 1.5 0 0 0 3 0h-3Zm0-90v2.813h3V0h-3Zm0 8.438v5.624h3V8.439h-3Zm0 11.25v5.625h3v-5.625h-3Zm0 11.25v5.625h3v-5.626h-3Zm0 11.25v5.624h3v-5.624h-3Zm0 11.25v5.624h3v-5.624h-3Zm0 11.25v5.624h3v-5.624h-3Zm0 11.25v5.624h3v-5.624h-3Zm0 11.25V90h3v-2.813h-3Z"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center gap-[9px]">
              <p className="text-2xl font-bold leading-[normal]">
                Receive Estimate
              </p>
              <p className="text-xl text-[#475464] leading-9">
                You'll receive a detailed estimate with material, labor
                quantities, and pricing in Excel, using our or your preferred
                template.
              </p>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={3}
          height={528}
          fill="none"
        >
          <path stroke="#E8E8E8" strokeWidth={2} d="M1.49 0v528" />
        </svg>
        <div className="w-full">
          <p className="font-bold text-2xl text-fg leading-[normal]">
            Upload Your Plane
          </p>
          <FileUpload />
        </div>
      </div>
    </div>
  );
};

async function OurWork() {
  const info = [
    {
      title: "Water Proofing",
      desc: "Here are the samples which you can download of our work on water proofing.",
    },
    {
      title: "Roofing",
      desc: "Here are the samples which you can download of our work on water proofing.",
    },
    {
      title: "Residential DC",
      desc: "Here are the samples which you can download of our work on water proofing.",
    },
    {
      title: "Lumber/Carpentary",
      desc: "Here are the samples which you can download of our work on water proofing.",
    },
  ];

  return (
    <div className="w-full rounded-[23px] flex flex-col items-center py-20 mt-48 px-24 bg-fg">
      <p className="text-[#CAA4A2] text-xl font-semibold text-center">
        See Our Work in Action
      </p>
      <h3 className="text-[40px] text-[#E4E4E4] font-semibold text-center">
        Our Project Samples
      </h3>
      <p className="text-[#B0B0B0] text-2xl leading-10 text-center mt-4 w-[873px] mb-20">
        Explore a selection of estimates and takeoffs crafted by
        UtopianTakeoffs, showcasing our expertise and attention to detail.
      </p>
      <div className="relative">
        <div className="grid grid-cols-2 gap-6">
          {info.map((item, index) => (
            <div
              key={index}
              className="flex p-6 flex-col bg-[#26272D] gap-4 border-[#4E4E4E] border rounded-[24px]"
            >
              <div className="">
                <p className="text-semibold text-2xl text-[#E4E4E4] font-bold">
                  {item.title}
                </p>

                <p className=" leading-8 text-xl text-[#A8A8A8] font-semibold">
                  {item.desc}
                </p>
              </div>
              <div className="flex justify-end space-x-2">
                <button className="flex items-center bg-gray hover:bg-gray-500 border border-[#E4E4E4] text-white py-1 px-3 rounded-lg">
                  <Download size={16} className="mr-1" />
                  pdf
                </button>
                <button className="flex items-center bg-[#C05852] hover:bg-[#C05840] text-white py-1 px-3 rounded-lg">
                  <Download size={16} className="mr-1" />
                  xsl
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute w-full h-40 bg-gradient-to-t from-fg to-transparent bottom-0 " />
      </div>
      <div className="text-center relative z-10 mt-20">
        <button className="bg-transparent text-white text-2xl leading-[normal] font-semibold py-2 px-4 inline-flex items-center">
          View All Samples
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            fill="none"
          >
            <path
              stroke="#E4E4E4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="m24.79 18.951 1.259-11.16m0 0-11.16-1.258m11.16 1.258L7.42 22.644"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
