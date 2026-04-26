import { SVGProps } from "react";


  export function PlayLineDuotone(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="m0 0l2048 1024L0 2048zm171 276v1496l1495-748z"
        ></path>
      </svg>
    )
  }
  
 /*  export function HeavyCheckMark(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M56 2L18.8 42.909L8 34.729H2L18.8 62L62 2z"
        ></path>
      </svg>
    )
  } */
  export function HeavyCheckMark(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 13.295L10.913 18L18 6"
        ></path>
      </svg>
    )
  }
  
  export function ArrowDiagonalTopRight(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3.707 13.707L12 5.414V9a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1v-.001H7a1 1 0 0 0 0 2h3.586l-8.293 8.293a.997.997 0 0 0 0 1.414a1 1 0 0 0 1.414 0z"
      ></path>
    </svg>
    )
  }
  export const ImageRoundEffect = (props: SVGProps<SVGSVGElement>)=>{

    return  <svg 
    
    {...props} viewBox="0 0 11 11" fill="none"
     xmlns="http://www.w3.org/2000/svg" 
     className="w-full h-full fill-[var(--bgColor)] ">
    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
     ></path>
    </svg>
  }
  export function ArrowDropDownLine(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414z"
        ></path>
      </svg>
    )
  }
  export function BaselineCalendarMonth(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"
        ></path>
      </svg>
    )
  }
  export function CarDoor(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M19 14h-3v2h3zm3 7H3V11l8-8h10a1 1 0 0 1 1 1zM11.83 5l-6 6H20V5z"
        ></path>
      </svg>
    )
  }
  export function GearboxSquare(props: SVGProps<SVGSVGElement>) {
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 4v16m7-16v16m7-16v8H5"
        ></path>
      </svg>
    )
  }
  
  export function TravelLuggageAndBagsRounded(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M10.904 7h2.192V4.808h-2.192zM12 12.385q-1.611 0-3.116-.557Q7.381 11.271 6 10.412V8.615q0-.666.474-1.14T7.616 7h2.288V4.577q0-.31.23-.54t.539-.23h2.654q.31 0 .54.23t.23.54V7h2.288q.666 0 1.14.475T18 8.615v1.797q-1.38.86-2.884 1.416q-1.504.557-3.116.557M7.616 20.5V20q-.667 0-1.141-.475T6 18.386v-6.8q1.285.734 2.657 1.21q1.372.474 2.843.578v.511q0 .213.144.357t.357.143t.356-.143t.143-.357v-.511q1.471-.104 2.843-.579q1.373-.475 2.657-1.21v6.8q0 .667-.475 1.141t-1.14.475v.5q0 .213-.146.356t-.36.144q-.202 0-.316-.16q-.115-.161-.179-.34V20H8.616v.5q0 .213-.146.356q-.145.144-.36.144q-.202 0-.317-.16q-.114-.161-.177-.34"
        ></path>
      </svg>
    )
  }
  export function User20Solid(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M10 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-6.535 6.494a1.23 1.23 0 0 0 .41 1.41A9.96 9.96 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1c.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003"
        ></path>
      </svg>
    )
  }
  export function InfoCircleFilled(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-7.75-4.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M13 17.5v-7h-2v7z"
          clipRule="evenodd"
        ></path>
      </svg>
    )
  }
  export function Play(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M444.4 235.236L132.275 49.449A24 24 0 0 0 96 70.072v364.142a24.017 24.017 0 0 0 35.907 20.839L444.03 276.7a24 24 0 0 0 .367-41.461ZM128 420.429V84.144l288.244 171.574Z"
        ></path>
      </svg>
    )
  }
  export function BaselineStar(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
        ></path>
      </svg>
    )
  }
  export function QuotesLeft(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M3.516 7a3.5 3.5 0 1 1-3.5 3.5L0 10a7 7 0 0 1 7-7v2a4.97 4.97 0 0 0-3.536 1.464a5 5 0 0 0-.497.578q.269-.043.548-.043zm9 0a3.5 3.5 0 1 1-3.5 3.5L9 10a7 7 0 0 1 7-7v2a4.97 4.97 0 0 0-3.536 1.464a5 5 0 0 0-.497.578q.269-.043.549-.043z"
        ></path>
      </svg>
    )
  }
  export function Whatsapp(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M17.6 6.32A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.88 11.89L4 20l4.2-1.1a7.9 7.9 0 0 0 3.79 1a8 8 0 0 0 8-7.93a8 8 0 0 0-2.39-5.65M12 18.53a6.6 6.6 0 0 1-3.36-.92l-.24-.15l-2.49.66l.66-2.43l-.16-.25a6.6 6.6 0 0 1 10.25-8.17a6.65 6.65 0 0 1 2 4.66a6.66 6.66 0 0 1-6.66 6.6m3.61-4.94c-.2-.1-1.17-.58-1.35-.64s-.32-.1-.45.1a9 9 0 0 1-.63.77c-.11.14-.23.15-.43 0a5.33 5.33 0 0 1-2.69-2.35c-.21-.35.2-.33.58-1.08a.38.38 0 0 0 0-.35c0-.1-.45-1.08-.61-1.47s-.32-.33-.45-.34h-.39a.7.7 0 0 0-.53.25A2.2 2.2 0 0 0 8 10.17a3.8 3.8 0 0 0 .81 2.05a8.9 8.9 0 0 0 3.39 3a3.85 3.85 0 0 0 2.38.5a2 2 0 0 0 1.33-.94a1.6 1.6 0 0 0 .12-.94c-.09-.1-.22-.15-.42-.25"
        ></path>
      </svg>
    )
  }
  export function PhoneCallSpeaker(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 12"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="m2.707 1.293l2 2a1 1 0 0 1 0 1.414L4.414 5L7 7.586l.293-.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-.232.232a3.5 3.5 0 0 1-4.95 0L1.061 6.475a3.5 3.5 0 0 1 0-4.95l.232-.232a1 1 0 0 1 1.414 0M2 2l-.232.232a2.5 2.5 0 0 0 0 3.536l4.464 4.464a2.5 2.5 0 0 0 3.536 0L10 10L8 8L7 9L3 5l1-1zm4.5 0c1.953 0 3.53 1.58 3.53 3.53a.5.5 0 0 1-1 0C9.03 4.132 7.9 3 6.5 3a.5.5 0 1 1 0-1m.23-2A5.27 5.27 0 0 1 12 5.27a.5.5 0 1 1-1 0A4.27 4.27 0 0 0 6.73 1a.5.5 0 1 1 0-1"
        ></path>
      </svg>
    )
  }
  
  export function LocationFill(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"
        ></path>
      </svg>
    )
  }
  export function LocationEmpty(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544"
        ></path>
        <path
          fill="currentColor"
          d="M512 512a96 96 0 1 0 0-192a96 96 0 0 0 0 192m0 64a160 160 0 1 1 0-320a160 160 0 0 1 0 320"
        ></path>
      </svg>
    )
  }
  export function MailCloseFill(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M0 2.75a1.5 1.5 0 0 1 1.5-1.5h11a1.5 1.5 0 0 1 1.5 1.5v.342L7.383 7.504A.7.7 0 0 1 7 7.607a.7.7 0 0 1-.383-.103L0 3.092zm0 1.844v6.656a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V4.594L8.073 8.546l-.005.004A1.97 1.97 0 0 1 7 8.857c-.375 0-.753-.102-1.068-.307l-.005-.004z"
          clipRule="evenodd"
        ></path>
      </svg>
    )
  }
  export function Facebook(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
        ></path>
      </svg>
    )
  }
  export function Youtube(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M15.841 4.8s-.156-1.103-.637-1.587c-.609-.637-1.291-.641-1.603-.678c-2.237-.163-5.597-.163-5.597-.163h-.006s-3.359 0-5.597.163c-.313.038-.994.041-1.603.678C.317 3.697.164 4.8.164 4.8S.005 6.094.005 7.391v1.213c0 1.294.159 2.591.159 2.591s.156 1.103.634 1.588c.609.637 1.409.616 1.766.684c1.281.122 5.441.159 5.441.159s3.363-.006 5.6-.166c.313-.037.994-.041 1.603-.678c.481-.484.637-1.588.637-1.588s.159-1.294.159-2.591V7.39c-.003-1.294-.162-2.591-.162-2.591zm-9.494 5.275V5.578l4.322 2.256z"
        ></path>
      </svg>
    )
  }
  export function Instagram(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248a4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008a3.004 3.004 0 0 1 0 6.008z"
          fill="currentColor"
        ></path>
        <circle cx="16.806" cy="7.207" r="1.078" fill="currentColor"></circle>
        <path
          d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42a4.6 4.6 0 0 0-2.633 2.632a6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71c0 2.442 0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419a4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186c.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688a2.987 2.987 0 0 1-1.712 1.711a4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055c-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311a2.985 2.985 0 0 1-1.719-1.711a5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654c0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311a2.991 2.991 0 0 1 1.712 1.712a5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655c0 2.436 0 2.698-.043 3.654h-.011z"
          fill="currentColor"
        ></path>
      </svg>
    )
  }
  
  export function CurrencyDollar(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M152 120h-16V56h8a32 32 0 0 1 32 32a8 8 0 0 0 16 0a48.05 48.05 0 0 0-48-48h-8V24a8 8 0 0 0-16 0v16h-8a48 48 0 0 0 0 96h8v64h-16a32 32 0 0 1-32-32a8 8 0 0 0-16 0a48.05 48.05 0 0 0 48 48h16v16a8 8 0 0 0 16 0v-16h16a48 48 0 0 0 0-96m-40 0a32 32 0 0 1 0-64h8v64Zm40 80h-16v-64h16a32 32 0 0 1 0 64"
        ></path>
      </svg>
    )
  }
  export function InfoOutline(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          d="M12 10.5v7M12 8V7"
        ></path>
      </svg>
    )
  }
  export function ThermometerHotLight(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M126 154.6V48a6 6 0 0 0-12 0v106.6a30 30 0 1 0 12 0m-6 47.4a18 18 0 1 1 18-18a18 18 0 0 1-18 18m38-67V48a38 38 0 0 0-76 0v87a62 62 0 1 0 76 0m-38 99a50 50 0 0 1-28.57-91a6 6 0 0 0 2.57-5V48a26 26 0 0 1 52 0v90a6 6 0 0 0 2.57 4.92A50 50 0 0 1 120 234m59-154.32a6 6 0 0 1 1.75-8.3c14.14-9.21 24.95-4.61 33.63-.9c7.9 3.37 13.6 5.8 22.37.09a6 6 0 1 1 6.55 10.05c-6.12 4-11.62 5.39-16.59 5.39c-6.51 0-12.11-2.39-17-4.49c-7.89-3.37-13.59-5.8-22.37-.09a6 6 0 0 1-8.34-1.75m66 24.64a6 6 0 0 1-1.76 8.3c-6.12 4-11.62 5.39-16.59 5.39c-6.51 0-12.11-2.39-17-4.49c-7.89-3.37-13.59-5.8-22.37-.09a6 6 0 0 1-6.55-10.05c14.14-9.21 24.95-4.6 33.63-.9c7.9 3.37 13.6 5.8 22.37.09a6 6 0 0 1 8.27 1.75"
        ></path>
      </svg>
    )
  }
  
  export function SeatbeltFill(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M128 112a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44m72 104H77.16l120.13-106a8 8 0 0 0 1.1-1.19a8.07 8.07 0 0 0 1.61-5.08A8 8 0 0 0 186.71 98l-24.54 21.65A80 80 0 0 0 49 179.25a8 8 0 0 0-.1 1.1l-.9 43.48a8 8 0 0 0 8 8.17h144a8 8 0 0 0 0-16m-11.88-73a8 8 0 0 0-6.25 1.94L119.47 200H200a8 8 0 0 0 8-8a79.6 79.6 0 0 0-14.27-45.62a8 8 0 0 0-5.61-3.38"
        ></path>
      </svg>
    )
  }
  export function Clock28Regular(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28 28"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M3.5 14C3.5 8.201 8.201 3.5 14 3.5S24.5 8.201 24.5 14S19.799 24.5 14 24.5S3.5 19.799 3.5 14M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12s12-5.373 12-12S20.627 2 14 2m-.007 5.648a.75.75 0 0 0-1.493.102v7l.007.102a.75.75 0 0 0 .743.648h5l.102-.007A.75.75 0 0 0 18.25 14H14V7.75z"
        ></path>
      </svg>
    )
  }
  export function ChevronRight(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="m22.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
        ></path>
      </svg>
    )
  }
  export function Search(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8.5 3a5.5 5.5 0 0 1 4.227 9.02l4.127 4.126a.5.5 0 0 1-.638.765l-.07-.057l-4.126-4.127A5.5 5.5 0 1 1 8.5 3m0 1a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9"
      ></path>
    </svg>
    )
  }
  export function CommentIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M20 17.17L18.83 16H4V4h16zM20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2"
        ></path>
      </svg>
    )
  }export function UserAltLight(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <g fill="none" stroke="currentColor" strokeLinecap="round">
          <circle cx="12" cy="8" r="3.5"></circle>
          <path d="M4.85 16.948c.639-2.345 3.065-3.448 5.495-3.448h3.31c2.43 0 4.856 1.103 5.496 3.448a10 10 0 0 1 .295 1.553c.06.55-.394.999-.946.999h-13c-.552 0-1.005-.45-.946-.998a10 10 0 0 1 .295-1.554Z"></path>
        </g>
      </svg>
    )
  }
  
  export function GridIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="1em"
        height="1em"
        {...props}
      >
        <g fill="currentColor">
          <rect width="4" height="4" x="1" y="1" rx="1" ry="1"></rect>
          <rect width="4" height="4" x="1" y="6" rx="1" ry="1"></rect>
          <rect width="4" height="4" x="1" y="11" rx="1" ry="1"></rect>
          <rect width="4" height="4" x="6" y="11" rx="1" ry="1"></rect>
          <rect width="4" height="4" x="6" y="6" rx="1" ry="1"></rect>
          <rect width="4" height="4" x="11" y="6" rx="1" ry="1"></rect>
          <rect width="4" height="4" x="11" y="11" rx="1" ry="1"></rect>
          <rect width="4" height="4" x="6" y="1" rx="1" ry="1"></rect>
          <rect width="4" height="4" x="11" y="1" rx="1" ry="1"></rect>
        </g>
      </svg>
    )
  }
  
  export function ArrowLeft(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M5 12l4-4m-4 4l4 4"
        ></path>
      </svg>
    )
  }
  export function ArrowRight(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 12H5m14 0l-4 4m4-4l-4-4"
        ></path>
      </svg>
    )
  }
  
  