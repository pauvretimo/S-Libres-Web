import React from "react";
import "../../DefaultSVG.css"
import DefaultSVG from "../../DefaultSVG";
import ascenseurs from "../../../images/elevatorWeb.svg";

class DSEG_E1 extends DefaultSVG {
    

    render() {
        return (
            <div className="scaling-svg-container" >
                <svg version="1.1" viewBox="0 0 845.55 470.37" className="scaling-svg" height={this.props.isLandScape ? "100%" : "80%"} width={this.props.isLandScape ? "80%" : "100%"} style={{transform: this.props.isLandScape ? "translate(-50%, -50%)" : "translate(-50%, -50%) rotate(90deg)"}}>
                    <g transform="translate(-78.345 -34.247)">
                        <defs>
                            <pattern id="patternEscaliersLtoR" patternUnits="userSpaceOnUse" width="8" height="8">
                                <line x1="0" y="0" x2="0" y2="8" stroke="#0ae" strokeWidth="4"/>
                            </pattern>
                        </defs>
                        <defs>
                            <pattern id="patternEscaliersBtoT" patternUnits="userSpaceOnUse" width="8" height="8"
                                     patternTransform="rotate(90)">
                                <line x1="0" y="0" x2="0" y2="8" stroke="#0ae" strokeWidth="4"/>
                            </pattern>
                        </defs>
                        <defs>
                            <pattern id="patternAscenseur" height="100%" width="100%"
                                     patternContentUnits="objectBoundingBox"
                                     viewBox="0 0 1 1" preserveAspectRatio="xMidYMid slice">
                                <image height="1" width="1" preserveAspectRatio="xMidYMid meet"
                                       href={ascenseurs}/>
                            </pattern>
                        </defs>
                        <path
                            d="m816.19 151.89c-3.729 0.23312-7.4659-0.0824-11.198 0.0812-0.0994 3.6841 0.0548 7.4094-0.0442 11.088 4.371 0.22549 8.9664 0.22689 13.206-0.0517-0.33487-3.6812 0.0805-7.3761-0.11792-11.065-0.60711-0.10223-1.2327-0.0708-1.8455-0.0517z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternAscenseur)"/>
                        <path
                            d="m787.26 364.96c-11.853 0.34847-23.75-0.28384-35.595 0.35414-3.5141 1.4605-2.1388 6.2623-5.0175 8.391-2.9415 3.2164-7.6561 3.6083-11.643 2.6228-3.0503-0.0431-5.2744 2.9327-4.5967 5.8671-0.20825 8.6713 0.52252 17.419-0.47464 26.037-1.6713 6.2056-8.5528 9.5677-14.635 8.6073-58.723-0.0393-117.45 0.0835-176.17-0.0881-6.8453-0.57207-11.759-7.6213-10.786-14.26-0.11338-10.43 0.26041-20.895-0.23395-31.302-1.7021-3.8391-6.6268-2.3033-9.905-2.5768-30.197 0.034-60.399-0.0998-90.592 0.10394-3.4126 0.61942-3.682 4.6968-3.3471 7.469-0.16781 9.6233 0.39432 19.299-0.36586 28.887-1.4865 6.4104-8.5252 10.024-14.753 9.0135-22.595-0.079-45.205 0.19994-67.791-0.192-6.6748-0.95429-11.033-8.0039-10.071-14.458-0.1081-10.327 0.26456-20.688-0.23396-30.992-1.6728-3.8231-6.5422-2.3293-9.8017-2.5915-33.829 0.034-67.662-0.10053-101.49 0.10394-3.4174 0.61617-3.686 4.6957-3.3468 7.469-0.17424 10.772 0.40078 21.597-0.36624 32.334-1.4807 6.4128-8.5271 10.023-14.753 9.013-21.526 0.0805-43.078-0.19729-64.589 0.17764-3.4093 1.0299-3.1822 5.1624-2.9085 7.9957 0.35936 5.4625-1.795 11.8-7.4 13.756-5.72 2.1074-11.925 0.64255-17.864 1.1484-9.0516 0.21544-18.189-0.35678-27.185 0.50026-3.6824 2.01-2.1101 6.8606-2.4152 10.238 0.07827 17.474-0.20039 34.96 0.18055 52.426 1.0336 3.6948 5.5627 3.0932 8.5202 3.0191 233.88-0.0265 467.77 0.0227 701.65-0.0491 3.4283-0.48529 3.8278-4.5911 3.4025-7.3446-0.0302-42.842 0.0722-85.694-0.096-128.53-0.49376-2.3184-3.1811-3.3594-5.3223-3.152z"
                            fill=" var(--grayColor)" strokeLinecap="round" strokeLinejoin="round"
                            stroke=" var(--grayColor)"/>
                        <path
                            d="m917.88 34.761c-32.254 0.21668-64.536-0.0997-96.788 0.19204-3.7354 0.21751-3.7774 4.757-3.7269 7.55-0.66879 6.2825-6.928 10.793-13.048 10.528-3.7225 1.0004-3.173 5.562-3.0624 8.5275 0.20485 7.2645-0.52282 14.648 0.46167 21.836 2.0902 3.3719 6.6365 1.9943 9.9424 2.2425 5.4277-0.40146 11.969-0.05477 15.269 4.9987 3.7184 5.4048 1.7565 12.23 2.2511 18.329 0.0227 18.757-0.0839 37.573 0.0964 56.293 2.742 0.37398 5.637 1.2664 6.939 3.9788 2.5557 4.3414 0.39058 9.6959 1.5133 14.21 4.5493-0.43621 10.76-0.2677 12.675 4.8056 1.5111 5.7137 0.30463 11.676 0.70042 17.502 0.0805 20.268-0.19616 40.562 0.18066 60.813 1.0549 3.4838 5.2759 3.1312 8.1483 2.9749 20.373-0.0615 40.769 0.1886 61.128-0.17824 3.788-1.3784 2.6307-6.099 2.759-9.2096-0.082-73.992 4e-3 -147.99-0.24907-221.98-0.35565-2.3676-3.0154-3.5791-5.1894-3.4178z"
                            fill=" var(--grayColor)" strokeLinecap="round" strokeLinejoin="round"
                            stroke=" var(--grayColor)"/>
                        <path
                            d="m586.31 36.12c-6.437 0.76368-13.063-0.09732-19.377 1.5207-4.9779 1.442-8.9859 5.4218-14.38 5.529-6.1346 0.11452-11.995 1.8916-17.828 3.6161-5.9555 1.8065-12.332 2.4278-18.408 0.85134-7.6336-0.57778-14.483 3.6112-21.596 5.698-5.6046 2.0909-11.499 3.8762-16.925 6.1559-2.3752 5.7103-8.8394 7.4918-14.304 8.7671-8.423 2.5248-17.631 3.6436-24.945 8.8683-2.1096 3.0164 0.82043 6.3544 1.7642 9.2717 0.57872 1.7954 2.4991 2.291 4.0232 1.218 3.3857-0.58957 4.8634-4.5123 8.4724-4.5836 3.6332-0.7191 7.0389 1.9669 7.6842 5.5102 13.75 31.541 17.717 67.649 8.9746 101.1-2.3286 8.8948-4.9222 17.865-9.114 26.062-3.4583 4.6539-10.438 4.6511-14.954 1.6051-1.6914-0.93779-4.684-1.5432-5.0197 1.159-1.1768 2.6561-3.9372 6.5429-0.84948 8.906 6.9664 5.262 15.946 6.3697 24.146 8.6895 2.7405 0.95892 5.5563 0.89601 8.3573 1.3538 3.2329 0.8077 5.5574 3.5965 6.3632 6.7175 3.2873 4.0455 9.0331 4.0969 13.487 6.1618 7.2064 2.1724 14.135 5.7103 21.661 6.5594 6.1237-0.19321 12.398-1.9759 18.397 0.13977 7.3827 1.7963 14.583 4.6261 22.232 5.056 6.6477 1.5354 12.387 6.4768 19.515 5.8816 7.073 0.10851 14.163 1.4132 21.187 0.14827 5.3119-1.9601 10.523-5.1778 16.432-4.2889 8.8807 0.30126 17.694 3.5628 26.269-0.0552 19.82-7.0403 39.667-14.571 59.534-21.818 4.0514-1.786 9.4435-2.526 11.206-7.2284 3.0261-8.1244 5.9353-16.326 8.7301-24.543-1.7228-1.7585-4.7176-2.1544-5.9969-4.547-4.1909-5.328-2.1548-12.428-2.6479-18.64 0.0593-27.615-0.18595-55.238 0.17802-82.847 0.47682-4.5518 4.4778-7.56 8.2603-9.3676 0.36171-2.8126-1.726-5.4072-2.3491-8.1293-2.4508-6.223-4.1541-12.816-7.2843-18.726-3.9237-4.2279-10.126-4.6521-15.12-7.0308-19.541-7.0446-38.914-14.591-58.588-21.242-9.4196-2.0371-18.866 2.5455-28.271 0.7904-5.2055-0.89087-9.5668-4.6709-15.027-4.3007-1.2957-0.0878-2.5901-0.01172-3.8866 0.01134z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="A 500 V-DSEG"/>
                        <path
                            d="m591.47 345.46c-26.652 0.18633-53.328 0.0843-79.989 0.16744-9.7957 0.0828-19.673-0.11226-29.418 0.14248-0.1886 3.6258-0.034 7.3153-0.096 10.962 0.30992 1.9049 3.3507 0.59645 4.6923 0.88312 35.901 0.0427 71.834 0.11112 107.73-0.0711 0.14211-3.645 0.0113-7.3576 0.096-11.029 0.18897-1.6282-2.0972-0.86219-3.0118-1.0556z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternEscaliersLtoR)"/>
                        <path
                            d="m814.87 193.27c-3.9157 0.39003-8.0525-0.32511-11.848 0.28052-0.12018 25.363-0.12018 50.834 0.0302 76.225 12.46 0.12359 25.03 0.20224 37.53-0.0517 0.19427-18.835 0.0635-37.809 0.0745-56.697-0.10886-4.3007 0.13001-8.8005-0.17802-12.988-5.7498-0.34038-11.586 0.40466-17.328-0.32103-3.3829-0.24741-5.8224-3.2319-6.5823-6.3522-0.55166-0.14967-1.1335-0.10095-1.6978-0.096z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternEscaliersBtoT)"/>
                        <path
                            d="m377.26 198.77c-7.4495 0.18637-15.322-0.94104-22.214 2.6224-3.5531 1.761-7.4334 3.1505-10.598 5.5294-2.5452 3.8671-1.0183 8.827-1.4135 13.173 0.0801 15.587-0.20334 31.191 0.18066 46.766 1.6525 2.3598 5.1984 0.96301 7.655 1.301 9.2699-0.11815 18.575 0.28618 27.822-0.238 2.2016-1.9225 0.77465-5.402 1.166-7.9842 0.0956-14.62-0.22904-29.275 0.20712-43.874 0.1765-2.076 3.2013-3.0317 2.2034-5.25-0.29291-3.7419 0.62517-7.7326-0.46866-11.322-1.193-1.1061-3.0586-0.70225-4.5399-0.72343z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternEscaliersBtoT)"/>
                        <path d="m400.68 402.63h13.11v-11.243h-13.11v11.243z"
                              stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                              fill="url(#patternAscenseur)"/>
                        <path d="m400.68 380.02h13.11v-11.25h-13.11v11.25z"
                              stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                              fill="url(#patternAscenseur)"/>
                        <path
                            d="m714.29 368.49c-20.605 0.0676-41.231-0.17121-61.823 0.15496-2.5018 1.6665-0.9154 5.2446-1.3583 7.751 0.33524 4.9765 0.0506 11.238-4.9311 13.93-1.7402 1.4114-4.8793 0.56413-6.0605 2.532-0.0869 3.9411-0.65447 8.1087 0.288 11.914 2.5958 1.6632 5.9904 0.3738 8.9158 0.78282 23.046-0.0265 46.097 0.0918 69.14-0.0964 2.6513-1.3102 1.2134-5.016 1.5406-7.376-0.13152-9.5366 0.31597-19.159-0.27099-28.64-1.2824-1.5063-3.7066-0.88524-5.4404-0.95225z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternEscaliersLtoR)"/>
                        <path
                            d="m591.17 368.5c-16.832 0.0816-33.673-0.17424-50.5 0.15496-2.4887 1.6772-0.89828 5.2389-1.3435 7.7436 0.14513 9.651-0.29443 19.34 0.23622 28.967 1.794 2.163 5.1405 0.83191 7.6063 1.1802 16.134-0.096 32.286 0.21052 48.408-0.18368 2.3736-1.632 0.9654-5.1974 1.3104-7.6476-0.15534-9.752 0.35112-19.603-0.29178-29.291-1.2847-1.4761-3.7037-0.85111-5.4257-0.92273z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternEscaliersLtoR)"/>
                        <path
                            d="m201.1 366.38c-25.182 0.068-50.385-0.17159-75.554 0.15496-2.4305 1.7059-0.86806 5.2015-1.2844 7.7067 0.21558 8.4665-0.2442 16.998 0.42815 25.423 2.169 2.1463 5.6603 0.66218 8.4035 1.0997 18.488 0.0741 36.997-0.18747 55.472 0.17726 1.6656 0.10696 2.5172 2.1059 3.7722 2.5098 4.5556-0.61561 9.4629 0.78436 13.819-0.73081 1.4292-2.7877 0.26419-6.147 0.6537-9.1816-0.14437-8.7205 0.32618-17.528-0.26985-26.192-1.2511-1.5315-3.7157-0.89522-5.4404-0.96703z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternEscaliersLtoR)"/>
                        <path
                            d="m743.09 101.02c-7.2453 2.0015-14.609 3.5786-21.777 5.8538-1.3323 2.6257-0.0507 5.7736-0.52226 8.6117 0.0922 27.088-0.0227 54.192 0.24907 81.27 1.5204 2.093 4.719 1.4824 6.8799 2.6206 1.5204-1.9819 3.9628-3.4443 6.4851-2.3274 3.3068 0.53249 6.7106 1.6308 9.9765 1.7295 2.9646-14.9 6.01-29.884 8.6975-44.868 0.15042-6.0755-2.052-11.912-2.8976-17.887-2.3645-11.647-4.5221-23.502-7.0918-35.004z"
                            fill=" var(--grayColor)" strokeLinecap="round" strokeLinejoin="round"
                            stroke=" var(--grayColor)"/>
                        <path
                            d="m804.06 96.171c-0.40725 3.0822 0.1149 6.3012-0.21392 9.4414-0.14967 2.0231 2.7825 0.45832 3.8829 0.95964 3.4801 0.0155 7.0928 0.2154 10.49-0.18455-0.0741-3.3568-8e-3 -6.777-0.19918-10.121-4.647-0.334-9.3063-0.14336-13.959-0.09596z"
                            fill="#00f" strokeLinecap="round" strokeLinejoin="round" stroke="#00f"/>
                        <path
                            d="m639.05 368.26c-0.0729 4.0058 0.0302 8.034-0.0518 12.047 1.7147 1.8682 1.2009-2.0537 1.218-3.1963 0.0624-2.9759 0.19918-5.9585 0.0151-8.9321-0.39522-0.0113-0.78731 0.0582-1.1811 0.0813z"
                            fill=" var(--grayColor)" strokeLinecap="round" strokeLinejoin="round"
                            stroke=" var(--grayColor)"/>
                        <path
                            d="m780.69 34.99c-4.6375 0.32564-9.9684-0.88711-13.74 2.5804-4.3884 3.9919-8.3555 8.432-12.655 12.528-4.6451 4.4731-8.744 9.8238-14.471 12.957-5.3356 2.4688-11.543 1.2378-17.03 1.8824 1.0423 3.7861 4.1819 7.3565 3.1964 11.457-0.46825 1.8779-3.3344 2.765-2.0865 4.9964 1.5057 3.3278 1.9822 7.1984 4.2272 10.136 2.6837 1.2877 5.7947-0.66574 8.5512-1.0986 4.6714-1.2698 10.584-3.1671 14.525 0.79595 4.2594 4.0542 3.7143 10.423 5.2469 15.673 2.8264 14.302 6.223 28.516 8.5424 42.903 0.42346 9.2069-2.8795 18.012-4.2586 27.014-2.5587 12.065-4.5994 24.309-7.6041 36.285-2.4214 5.5436-11.975 3.4763-12.047-2.4803-0.21203-1.7312-2.6228-0.66703-3.75-1.4321-1.5895-0.50714-1.7785 2.5546-3.6319 2.7018-2.6124 1.4171-6.8538-0.86415-8.1658 2.6918-1.2578 3.508-2.1291 7.1939-3.4459 10.647 3.399 2.1494 2.0382 6.5538 0.57581 9.4636-2.0305 6.5766-4.9145 14.276-12.159 16.529-19.322 7.4258-38.88 14.225-58.28 21.445-9.2859 3.1916-18.439 7.4141-28.406 7.8205-13.279 0.77782-26.565 1.9741-39.88 1.3108-10.881-0.55856-21.789-0.59338-32.661-1.2224-10.851-0.91543-20.89-5.4632-31.273-8.3871-19.031-6.0331-38.219-11.728-57.112-18.231-12.081-4.9561-24.444-9.8839-34.854-17.926-4.2715-3.0344-5.4727-8.8409-3.604-13.583 1.0158-3.8234 3.4285-7.2763 3.868-11.216-1.1524-2.2837-4.3487-2.6346-6.4559-3.8717-4.7275-2.3929-11.409-3.3338-14.016-8.739-1.3964-1.7622-0.87957-4.4514-2.3161-6.0286-2.7551-0.90763-5.8062-0.16505-8.6516-0.38386-1.5434 0.71738-0.59067 3.2286-2.2293 4.1782-1.9737 1.0312-2.54 2.4193-2.1434 4.6299 8e-3 3.6345-0.13871 7.3263 0.11339 10.924 4 1.9115 3.6607 6.8692 3.554 10.588 0.34545 1.7623-0.97145 4.5657 1.6281 4.7587 3.3109 1.6973 3.7052 5.7052 3.2966 8.9838-0.13606 11.849 0.32277 23.731-0.29972 35.559-1.1559 5.841-7.7167 8.6634-13.166 7.7451-14.723 0.0926-29.465-0.20856-44.176 0.18304-2.3554 1.6568-0.96132 5.204-1.3068 7.6624 0.0302 38.267-0.0926 76.539 0.0964 114.8 1.3094 2.6511 5.0164 1.2141 7.376 1.5395 12.665-0.13266 25.387 0.30614 38.015-0.2623 2.1262-2.281 0.6548-5.8946 1.0845-8.7224 0.13606-8.1776-0.38029-16.425 0.36246-24.555 0.24945-1.3904-2.4889-0.61965-3.2128-1.6426-4.6845-2.5609-5.6222-8.4346-5.0849-13.275 0.0888-18.473-0.22111-36.963 0.19955-55.425 0.91711-5.86 7.4035-9.1258 12.906-8.1718 109.37 0.0151 218.74-0.0578 328.1 0.0707 6.0772 0.40316 9.9903 6.9646 8.9455 12.659-0.17197 11.017 0.38562 22.082-0.35301 33.068-1.2878 5.7137-7.7402 8.4097-13.115 7.5146-36.546 0.0302-73.096-0.0934-109.64 0.096-2.6514 1.3164-1.2137 5.014-1.5404 7.376 0.0881 17.453-0.20674 34.923 0.18217 52.366 1.6889 2.3104 5.1879 0.9586 7.6476 1.2713 4.9864-0.21317 10.167 0.53983 15.03-0.42977 1.5966-2.4244 0.38143-5.6307 0.72669-8.3917 0.10885-10.874-0.46776-21.79 0.2109-32.637 1.2909-5.7065 7.727-8.4104 13.1-7.5148h77.373c4.7162-1.9975 10.632 1.6133 11.095 6.688 1.6362 1.6338 4.4179 0.94329 6.437 0.6644 1.2761-2.4973 1.2064-5.8908 3.9816-7.4875 4.7952-4.014 11.378-1.9352 17.042-2.4667 10.209-0.13985 20.482 0.32277 30.65-0.27704 2.08-2.3006 0.64653-5.8762 1.0556-8.7003 0.0408-51.302-0.0865-102.61 0.0903-153.91 0.60469-5.976 7.0304-9.7465 12.676-8.7721 7.3906-0.13455 14.826 0.31631 22.187-0.26283 1.7098-1.4977 1.4608-4.6255 0.46507-6.4444-2.8373-1.2882-6.1726-0.17091-9.2052-0.59055-6.383-0.17832-12.941 0.70928-19.2-0.72343-5.1442-2.0027-6.9304-8.1017-6.1946-13.152 0.25928-7.4514-0.63417-15.026 0.61387-22.392 1.7199-5.2195 7.7812-7.3395 12.832-6.6388 4.1157-0.2564 8.4566 0.67802 12.421-0.52166 1.672-1.9123 1.0669-6.4654-2.2012-5.9768-4.9194 0.0577-9.8726 0.27821-14.781-0.10938-5.4695-0.45089-9.0445-5.8449-8.779-11.058 0.21845-21.25-0.19805-42.533 0.23055-63.782 0.81343-5.9819 7.4762-9.3991 13.062-8.2769 2.9341-0.42592 2.2545-3.9756 2.1481-6.0901-0.5788-3.0989-4.4048-1.4458-6.5522-1.8682-6.6447-0.02381-13.289-0.04751-19.934-0.02154z"
                            fill="#0ae" strokeLinecap="round" strokeLinejoin="round" stroke="#0ae"/>
                    </g>
                </svg>
                <div style={{borderColor: this.state.eventColor}}
                     className={this.state.eventId ? "popUp" : "hidden"}>
                    <button className="popUpCloseButton" onClick={() => {
                        this.setState({eventId: false})
                    }}>x
                    </button>
                    <p className="popUpText">
                        {this.state.isFree === 0 ? "La salle est occupée.": this.state.isFree === 1 ? "La salle est bientôt occupée." : "La salle est libre !" }<br/><br/>
                        {this.state.id}</p>
                </div>
            </div>
        )
    }
}

export default DSEG_E1