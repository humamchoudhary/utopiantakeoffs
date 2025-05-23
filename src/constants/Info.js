import {
  Anvil,
  Axe,
  Banknote,
  BedDouble,
  BrickWall,
  Calculator,
  ChartPie,
  ChartSpline,
  Construction,
  Earth,
  HardHat,
  Lamp,
  ShieldCheck,
  ThermometerSun,
} from "lucide-react";
export const Services = [
  {
    name: "Cost Estimation",
    icon: <ChartPie color="#fff" size={20} />,
    description:
      "Accurate, fast, and affordable building cost estimates to keep your projects on budget and on schedule.",
    // imagePath: Image1,
    imagePath:
      "https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    link: "/service/cost-estimation",
  },
  {
    name: "Material Takeoffs",

    description:
      "Reliable and detailed material takeoff services to streamline your construction estimates and budgeting.",
    imagePath:
      "https://images.unsplash.com/photo-1518096495978-56aa98bcd990?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    link: "/service/material-takeoffs",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="16.6665"
          y="3.33325"
          width="3.33333"
          height="10"
          rx="1.66667"
          transform="rotate(90 16.6665 3.33325)"
          stroke="#fff"
          stroke-width="1.5"
        />
        <rect
          x="16.6665"
          y="10"
          width="3.33333"
          height="10"
          rx="1.66667"
          transform="rotate(90 16.6665 10)"
          stroke="#fff"
          stroke-width="1.5"
        />
        <rect
          x="13.3335"
          y="6.66675"
          width="3.33333"
          height="10"
          rx="1.66667"
          transform="rotate(90 13.3335 6.66675)"
          stroke="#fff"
          stroke-width="1.5"
        />
        <rect
          x="14.1665"
          y="13.3333"
          width="3.33333"
          height="10"
          rx="1.66667"
          transform="rotate(90 14.1665 13.3333)"
          stroke="#fff"
          stroke-width="1.5"
        />
      </svg>
    ),
  },
  {
    name: "Dedicated Construction Estimation",
    link: "/service/dedicated-construction-estimation",
    imagePath:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",

    description:
      "Utopian Takeoffs provide accurate cost estimates for contractors and subcontractors using location-specific material.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_53_63)">
          <rect
            x="1.6665"
            y="1.66675"
            width="8.33333"
            height="6.66667"
            rx="2"
            stroke="#fff"
            stroke-width="1.5"
          />
          <rect
            x="10"
            y="11.6667"
            width="8.33333"
            height="6.66667"
            rx="2"
            stroke="#fff"
            stroke-width="1.5"
          />
          <path
            d="M17.012 3.33325L18.0894 4.41066C18.4149 4.7361 18.4149 5.26374 18.0894 5.58917L17.012 6.66659M13.3335 4.99992L17.8453 4.99992"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M2.98799 13.3333L1.91058 14.4107C1.58514 14.7361 1.58514 15.2637 1.91058 15.5892L2.98799 16.6666M6.6665 14.9999L2.15466 14.9999"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_53_63">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "Residential Estimating",
    link: "/service/residential-estimating",
    icon: <ChartSpline color="#fff" size={20} />,
    imagePath:
      "https://images.unsplash.com/photo-1489370321024-e0410ad08da4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    description:
      "Utopian Takeoffs provides accurate and efficient residential estimating services, helping contractors, developers, and homeowners streamline budgeting, bidding, and construction planning.",
  },
  {
    name: "Commercial Estimating",
    link: "/service/commercial-estimating",
    imagePath:
      "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    description:
      "Utopian Takeoffs offers precise and efficient commercial estimating services for contractors, developers, and design firms, ensuring accurate budgeting, bidding, and cost control.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_53_32)">
          <path
            d="M1.6665 5.66675C1.6665 3.45761 3.45736 1.66675 5.6665 1.66675H5.99984C8.20897 1.66675 9.99984 3.45761 9.99984 5.66675V18.3334H5.66651C3.45737 18.3334 1.6665 16.5426 1.6665 14.3334V5.66675Z"
            stroke="#fff"
            stroke-width="1.5"
          />
          <path
            d="M10 6.66675H14.3333C16.5425 6.66675 18.3333 8.45761 18.3333 10.6667V14.3334C18.3333 16.5426 16.5425 18.3334 14.3333 18.3334H10V6.66675Z"
            stroke="#fff"
            stroke-width="1.5"
          />
          <path
            d="M13.3335 10H15.0002"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.3335 12.5H15.0002"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 5H6.66667"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 7.5H6.66667"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_53_32">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "Industrial Estimating",
    link: "/service/industrial-estimating",
    imagePath:
      "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_53_108)">
          <path
            d="M13.5927 2.47889C12.5048 1.95828 11.2864 1.66675 9.99984 1.66675C8.71332 1.66675 7.49489 1.95828 6.40702 2.47889M13.5927 2.47889C13.0891 2.98168 12.7776 3.67673 12.7776 4.44453C12.7776 5.97865 14.0213 7.2223 15.5554 7.2223C16.3232 7.2223 17.0182 6.91079 17.521 6.40726M13.5927 2.47889C14.0952 1.97706 14.7891 1.66675 15.5554 1.66675C17.0895 1.66675 18.3332 2.9104 18.3332 4.44453C18.3332 5.21085 18.0229 5.9047 17.521 6.40726M17.521 6.40726C18.0416 7.49514 18.3332 8.71356 18.3332 10.0001C18.3332 11.2866 18.0416 12.505 17.521 13.5929M6.40702 2.47889C5.90445 1.97706 5.21061 1.66675 4.44428 1.66675C2.91016 1.66675 1.6665 2.9104 1.6665 4.44453C1.6665 5.21085 1.97682 5.9047 2.47865 6.40726M6.40702 2.47889C6.91055 2.98168 7.22206 3.67673 7.22206 4.44453C7.22206 5.97865 5.97841 7.2223 4.44428 7.2223C3.67648 7.2223 2.98144 6.91079 2.47865 6.40726M2.47865 6.40726C1.95804 7.49514 1.6665 8.71356 1.6665 10.0001C1.6665 11.2866 1.95804 12.505 2.47865 13.5929M2.47865 13.5929C1.97682 14.0955 1.6665 14.7893 1.6665 15.5556C1.6665 17.0898 2.91016 18.3334 4.44428 18.3334C5.21061 18.3334 5.90445 18.0231 6.40702 17.5213M2.47865 13.5929C2.98144 13.0894 3.67648 12.7779 4.44428 12.7779C5.97841 12.7779 7.22206 14.0215 7.22206 15.5556C7.22206 16.3234 6.91055 17.0185 6.40702 17.5213M6.40702 17.5213C7.49489 18.0419 8.71332 18.3334 9.99984 18.3334C11.2864 18.3334 12.5048 18.0419 13.5927 17.5213M17.521 13.5929C17.0182 13.0894 16.3232 12.7779 15.5554 12.7779C14.0213 12.7779 12.7776 14.0215 12.7776 15.5556C12.7776 16.3234 13.0891 17.0185 13.5927 17.5213M17.521 13.5929C18.0229 14.0955 18.3332 14.7893 18.3332 15.5556C18.3332 17.0898 17.0895 18.3334 15.5554 18.3334C14.7891 18.3334 14.0952 18.0231 13.5927 17.5213"
            stroke="#fff"
            stroke-width="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_53_108">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    description:
      "Utopian Takeoffs provides precise industrial estimating services for EPC contractors, ensuring cost-effective, accurate, and fast estimates for various industrial projects.",
  },
  {
    name: "Estimating Consultant",
    link: "/service/estimating-consultant",
    imagePath:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    icon: <ShieldCheck color="#fff" size={20} />,
    description:
      "Utopian Takeoffs provides expert construction estimating services to help contractors, developers, and builders streamline bidding, budgeting, and cost management for successful projects.",
  },
];

export const Trade = [
  {
    name: "Concrete Estimating",
    link: "/trades/concrete-estimating",
    icon: <ChartPie color="#fff" size={20} />,
  },
  {
    name: "Opening Estimating",
    link: "/trades/opening-estimating",
    icon: <Calculator color="#fff" size={20} />,
  },
  {
    name: "Masonry Estimating",
    link: "/trades/masonry-estimating",
    icon: <BrickWall color="#fff" size={20} />,
  },
  {
    name: "Interior & Exterior Finishes",
    link: "/trades/finishes",
    icon: <Lamp color="#fff" size={20} />,
  },
  {
    name: "Metals Estimating",
    link: "/trades/metals-estimating",
    icon: <Anvil color="#fff" size={20} />,
  },
  {
    name: "Furnishes",
    link: "/trades/furnishes",
    icon: <BedDouble color="#fff" size={20} />,
  },
  {
    name: "Wood & Plastic Composites",
    link: "/trades/composites",
    icon: <Axe color="#fff" size={20} />,
  },
  {
    name: "MEP",
    link: "/trades/mep",
    icon: <HardHat color="#fff" size={20} />,
  },
  {
    name: "Thermal Protection",
    link: "/trades/thermal-protection",
    icon: <ThermometerSun color="#fff" size={20} />,
  },
  {
    name: "Earthwork Estimating",
    link: "/trades/earthwork-estimating",
    icon: <Earth color="#fff" size={20} />,
  },
  {
    name: "Sitework Estimating",
    link: "/trades/sitework-estimating",
    icon: <Construction color="#fff" size={20} />,
  },
  {
    name: "Pricing",
    link: "/trades/pricing",
    icon: <Banknote color="#fff" size={20} />,
  },
];
