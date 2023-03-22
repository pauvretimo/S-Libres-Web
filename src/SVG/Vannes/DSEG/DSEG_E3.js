import React from "react";
import "../../DefaultSVG.css"
import DefaultSVG from "../../DefaultSVG";
import ascenseurs from "../../../images/elevatorWeb.svg";

class DSEG_E1 extends DefaultSVG {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="scaling-svg-container">
                <svg version="1.1" viewBox="0 0 932.98 354.47" className="scaling-svg" height={this.props.isLandScape ? "100%" : "80%"} width={this.props.isLandScape ? "80%" : "100%"} style={{transform: this.props.isLandScape ? "translate(-50%, -50%)" : "translate(-50%, -50%) rotate(90deg)"}}>
                    <g transform="translate(-332.15 -102.08)">
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
                            d="m337.66 384.21c-2.7178 0.40316-4.9378 2.8731-4.9871 5.6294-0.0575 8.8014-8e-3 17.607-0.0246 26.41 0.0106 10.814-0.0212 21.629 0.0159 32.441 8e-3 2.7809 2.2168 5.3134 4.9608 5.7316 2.6731 0.1933 5.363 0.0391 8.0429 0.0885 28.135-5e-3 56.272 0.0106 84.406-8e-3 2.7742 0.0221 5.3608-2.126 5.8087-4.8698 0.23591-2.3012 0.0537-4.6295 0.11112-6.9418-8e-3 -17.662 0.0156-35.325-0.0117-52.987-0.11722-3.0208-2.8544-5.6191-5.878-5.5718-30.512-4.4e-4 -61.025-0.0114-91.536 5e-3 -0.30271 0.024-0.60542 0.0481-0.90813 0.0722z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="S 301 V-DSEG"/>
                        <path
                            d="m448.66 358.64c-2.7522 0.40817-4.9782 2.9402-4.9893 5.7291-0.0387 18.368-6e-3 36.739-0.0166 55.108 0.0106 9.903-0.0212 19.808 0.0159 29.71 0.0127 2.7414 2.156 5.2652 4.8635 5.7083 2.2688 0.24065 4.5657 0.0568 6.846 0.11542 33.284 4e-3 66.568 0.0291 99.851 0.0198 2.7374 0.017 5.3077-2.0672 5.7846-4.7743 0.27901-2.0604 0.0708-4.1592 0.13524-6.2354-9e-3 -26.635 0.0182-53.271-0.0137-79.906-0.12623-3.0075-2.8484-5.5887-5.8584-5.5526-35.233-4e-3 -70.466-0.012-105.7 4e-3 -0.30662 0.0247-0.61323 0.0493-0.91985 0.074z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="S 302 V-DSEG"/>
                        <path
                            d="m632.45 359.04c-2.5301-0.0317-4.9463 1.6703-5.7287 4.0828-0.55913 1.9643-0.23036 4.0377-0.3295 6.0523-0.0816 26.822-0.18416 53.645-0.25261 80.467-0.0299 2.766 2.1083 5.3444 4.8422 5.7959 2.2681 0.23822 4.5647 0.0543 6.8444 0.1122 32.358-5e-3 64.718 0.0106 97.075-8e-3 2.7373 0.017 5.3077-2.0672 5.7846-4.7743 0.27889-2.0611 0.0709-4.1605 0.13525-6.2374-8e-3 -26.664 0.0156-53.328-0.0117-79.992-0.11762-3.0146-2.8444-5.6079-5.8624-5.5651-34.166 0.0157-68.331 0.0458-102.5 0.0671z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="S 303 V-DSEG"/>
                        <path
                            d="m753.56 358.54c-2.7251 0.40777-4.9549 2.8784-5.0169 5.6429-0.10349 10.528-0.10854 21.061-0.17415 31.59-0.0765 18.157-0.19519 36.315-0.24524 54.47-0.0101 2.9509 2.5076 5.6319 5.462 5.7622 4.2653 0.0939 8.5375 0.0136 12.805 0.0403 29.779-5e-3 59.56 0.0104 89.339-8e-3 2.7972 0.022 5.4054-2.1224 5.8943-4.8813 0.27034-2.2692 0.11452-4.5722 0.20187-6.8554 0.33337-26.759 0.70135-53.518 1.0131-80.277-0.0693-2.993-2.7642-5.5985-5.7588-5.5604-34.201-4e-3 -68.402-0.0118-102.6 4e-3 -0.30597 0.0241-0.61193 0.0481-0.91789 0.0722z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="S 305 V-DSEG"/>
                        <path
                            d="m876.77 358.71c-2.7155 0.40443-4.9316 2.8759-4.9812 5.6294-0.0575 8.8014-8e-3 17.607-0.0246 26.41 0.0106 19.681-0.0211 39.364 0.0158 59.045 0.013 2.7498 2.1593 5.2802 4.8728 5.734 2.3345 0.24069 4.6967 0.0699 7.0426 0.13498 31.841 0.11071 63.683 0.2426 95.524 0.34006 2.7431 0.0254 5.3171-2.0582 5.8082-4.7658 0.27661-2.0855 0.0869-4.2095 0.15815-6.311 0.11541-26.902 0.25636-53.803 0.35581-80.705-0.0925-3.0156-2.8105-5.6318-5.8311-5.5886-34.009-2e-3 -68.018-0.0116-102.03 5e-3 -0.30466 0.0241-0.60932 0.0481-0.91398 0.0722z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="S 307 V-DSEG"/>
                        <path
                            d="m998.47 359.36c-2.7185 0.40209-4.94 2.8724-4.989 5.6294-0.0575 8.8014-8e-3 17.607-0.0246 26.41 0.0106 19.258-0.0212 38.518 0.0159 57.775 0.01 2.7809 2.2204 5.3108 4.9651 5.7239 2.7038 0.18428 5.4227 0.0292 8.1327 0.0733 31.599-0.056 63.198-0.0875 94.796-0.15872 3.0226-0.11781 5.628-2.8469 5.5897-5.8741 0-27.987 0.014-55.974-0.01-83.961-0.047-3.06-2.8021-5.7361-5.8625-5.6941-33.904-4e-3 -67.809-0.0119-101.71 4e-3 -0.30205 0.024-0.60411 0.0481-0.90617 0.0721z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="S 308 V-DSEG"/>
                        <path
                            d="m437.54 170c-2.7178 0.40316-4.9378 2.8731-4.9871 5.6294-0.0575 8.8014-8e-3 17.607-0.0246 26.41 0.0106 17.817-0.0211 35.637 0.0159 53.453 0.0106 2.7786 2.212 5.3162 4.9572 5.7322 2.7078 0.19201 5.432 0.0388 8.1465 0.0879 23.437-5e-3 46.875 0.0105 70.312-8e-3 2.7462 0.0214 5.3162-2.0747 5.8024-4.784 0.27385-2.0945 0.0767-4.2258 0.14335-6.3354 0.0419-24.897 0.11722-49.794 0.13815-74.691-0.11014-3.0122-2.8329-5.6114-5.8487-5.571-25.915-2e-3 -51.832-0.0116-77.747 5e-3 -0.30271 0.0241-0.60542 0.0481-0.90813 0.0722z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="S 316 V-DSEG"/>
                        <path
                            d="m535.47 170.34c-2.7116 0.39814-4.933 2.8584-4.9781 5.61-0.0556 9.3668-8e-3 18.738-0.0238 28.106 0.0105 17.221-0.021 34.443 0.0158 51.663 5e-3 2.782 2.2162 5.3147 4.9609 5.7316 2.6731 0.1933 5.363 0.0391 8.0429 0.0885 23.042-5e-3 46.084 0.0106 69.125-8e-3 2.7758 0.0216 5.3584-2.1272 5.808-4.8715 0.2371-2.267 0.0544-4.5618 0.11188-6.8401-5e-3 -24.442 0.0106-48.884-8e-3 -73.325 0.0156-2.7465-2.0701-5.3215-4.7834-5.8108-2.0554-0.2822-4.1505-0.0862-6.2224-0.15671-23.716-0.0819-47.433-0.18456-71.149-0.25354-0.30009 0.0223-0.60018 0.0445-0.90027 0.0668z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="S 315 V-DSEG"/>
                        <path
                            d="m632.26 169.81c-2.7169 0.40328-4.9356 2.8745-4.9851 5.6294-0.0547 8.7347-2e-3 17.474-0.0157 26.21 0.0167 17.795-9e-3 35.591 0.0342 53.385 8e-3 2.7817 2.2194 5.3129 4.9646 5.7282 2.6716 0.18804 5.3591 0.0344 8.0371 0.0811 34.677-0.0302 69.355-0.0397 104.03-0.0829 2.7725 0.0182 5.3607-2.127 5.8068-4.8718 0.2394-2.2687 0.055-4.5655 0.11301-6.8457-7e-3 -24.573 0.013-49.147-0.01-73.72-0.10878-3.0224-2.8386-5.6301-5.8643-5.5905-37.068-2e-3 -74.137-0.0117-111.2 5e-3 -0.30271 0.0241-0.60542 0.0481-0.90813 0.0722z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="S 314 V-DSEG"/>
                        <path
                            d="m764.13 169.31c-2.7474 0.40419-4.9668 2.9372-4.9706 5.7196 0.0247 18.635 0.12086 37.272 0.17306 55.908 0.0436 8.2281 0.0244 16.459 0.10724 24.685 0.0426 3.0062 2.6959 5.6641 5.7026 5.7071 8.5713 0.0587 17.147 8e-3 25.72 0.0252 28.343-8e-3 56.687 0.0156 85.03-0.0117 3.0131-0.11643 5.6033-2.8475 5.5574-5.8624-0.0425-26.774-0.0782-53.548-0.1398-80.321 0.0172-2.7426-2.0753-5.3141-4.784-5.7953-2.0627-0.27661-4.1629-0.0707-6.241-0.13435-35.082 5e-3 -70.165-0.0106-105.25 8e-3 -0.30271 0.0241-0.60541 0.0481-0.90812 0.0722z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="S 313 V-DSEG"/>
                        <path
                            d="m895.9 102.64c-1.6438 0.29806-2.7818 1.9389-2.6367 3.5774 7e-3 46.956-0.013 93.913 0.01 140.87-0.0278 1.8353 1.6586 3.3891 3.477 3.2872 4.8952-0.0185 9.8008 0.037 14.689-0.0278 1.8909-0.62204 4.0636-0.15681 5.5914 1.1059 0.83086 0.67796 1.4513 1.6098 1.8517 2.5917-0.0132 1.3322 0.51688 2.7644 1.7758 3.3826 1.368 0.70973 2.9739 0.3137 4.4519 0.41832h53.987c0.99672 0.38782 2.2804 0.27774 2.904-0.6918 0.3906-0.6208 0.19952-1.4323 0.54715-2.0933 0.73926-2.3968 2.8511-4.2683 5.2872-4.8223 2.1453-0.36102 4.3445-0.11526 6.5133-0.1875 4.1018-0.0241 8.208 0.0478 12.307-0.0352 1.7826-0.21116 3.0368-2.016 2.8165-3.7598 0-46.55 0.01-93.1-0.01-139.65-0.07-1.871-1.8923-3.3444-3.732-3.1342-36.398-0.29263-72.797-0.61197-109.19-0.8879-0.21355 0.0197-0.4271 0.0394-0.64066 0.0592z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="A 104 V-DSEG"/>
                        <path
                            d="m1025.8 169.68c-2.7525 0.40565-4.9828 2.9358-4.9959 5.7252-0.041 16.172-0.01 32.347-0.018 48.52 0.011 10.393-0.021 20.787 0.016 31.179 0.01 2.78 2.2117 5.3199 4.957 5.7362 2.6407 0.19583 5.2987 0.0398 7.9465 0.0898 23.298-5e-3 46.596 0.0106 69.893-8e-3 2.7372 0.0171 5.3073-2.0678 5.7846-4.7743 0.2789-2.0611 0.071-4.1605 0.1353-6.2374 0.028-2.0752-0.052-4.1607 0.03-6.2295 0.2091-2.0355 1.1356-3.9514 2.5233-5.4457 1.4951-1.5099 3.4804-2.512 5.5951-2.7682 1.7961-0.0258 3.6532-0.65666 4.8196-2.0802 1.3291-1.4056 1.587-3.4186 1.4851-5.2725-0.01-17.646 0.016-35.293-0.012-52.938-0.1169-3.0144-2.8426-5.6109-5.8604-5.5721-30.464-4e-3 -60.93-0.0119-91.394 4e-3 -0.3021 0.024-0.6041 0.0481-0.9062 0.0721z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="S 312 V-DSEG"/>
                        <path
                            d="m1135.8 169.74c-2.7184 0.40282-4.9377 2.8729-4.9871 5.6294-0.058 8.8014-0.01 17.607-0.025 26.41 0.016 9.3642-0.032 18.731 0.024 28.094 0.041 2.9273 2.5586 5.5473 5.4864 5.6803 3.0353 0.0132 6.0656 1.4088 7.8733 3.8786 1.5397 1.9821 2.0977 4.5541 1.9159 7.0244 0 3.2207-0.1393 6.4457-0.043 9.6635 0.1928 2.8685 2.8043 5.2818 5.6735 5.2904 10.27 0.0337 20.543 0.0186 30.813 8e-3 2.749 0.12883 5.3164-2.1341 5.5473-4.8738 0.1073-0.70404 0.2122-1.4084 0.3185-2.1127 23.295-5e-3 46.59 0.0106 69.885-8e-3 2.7768 0.0225 5.3626-2.1278 5.8102-4.8738 0.2333-2.3335 0.053-4.6935 0.1096-7.0378-0.01-22.426 0.016-44.852-0.012-67.278-0.1151-3.0152-2.8444-5.6116-5.8624-5.571-40.54-2e-3 -81.081-0.0117-121.62 5e-3 -0.3027 0.024-0.6054 0.0481-0.9081 0.0721z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="S 311 V-DSEG"/>
                        <path
                            d="m1199.8 261.36c-2.7158 0.40261-4.9315 2.8744-4.9813 5.6275-0.057 8.8674-0.01 17.739-0.025 26.608 0.01 22.292-0.01 44.586 0.01 66.878-0.02 2.7736 2.1225 5.3609 4.8678 5.8087 2.3019 0.23579 4.6308 0.0538 6.9438 0.11112 17.228-0.0105 34.458 0.021 51.684-0.0158 2.782-5e-3 5.3147-2.2162 5.7317-4.9609 0.1933-2.6731 0.039-5.3629 0.089-8.0429-0.01-28.827 0.013-57.655-0.01-86.482-0.1125-3.02-2.8381-5.6268-5.8623-5.5897-19.177-0.01-38.356-0.0236-57.532-0.0138-0.3047 0.0241-0.6093 0.0481-0.914 0.0722z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="S 310 V-DSEG"/>
                        <path
                            d="m1178.3 373.33c-2.7179 0.40316-4.9378 2.8731-4.9871 5.6294-0.057 8.8014-0.01 17.607-0.025 26.41 0.011 14.603-0.021 29.207 0.016 43.808 0.013 2.7413 2.1561 5.2652 4.8635 5.7083 2.2671 0.2371 4.5618 0.0544 6.8402 0.11188 24.707-8e-3 49.415 0.0156 74.122-0.0117 3.0142-0.11547 5.6049-2.8545 5.5407-5.8722-0.1128-23.317-0.2173-46.634-0.3477-69.95 0-2.7798-2.1564-5.3538-4.9045-5.8018-2.2689-0.23763-4.5656-0.0548-6.8459-0.11226-24.455 5e-3 -48.91-0.0106-73.364 8e-3 -0.3027 0.024-0.6054 0.0481-0.9081 0.0722z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="S 309 V-DSEG"/>
                        <path
                            d="m533.53 291.23c-2.7553 0.40578-4.9923 2.9306-5.0145 5.7231-0.0606 8.5803-0.0639 17.165-0.0814 25.746-0.0272 2.765 2.1094 5.3456 4.8441 5.7959 2.2681 0.23823 4.5647 0.0543 6.8444 0.11221 13.261-0.0106 26.523 0.0211 39.783-0.0158 2.7413-0.0122 5.2652-2.1563 5.7079-4.8637 0.23799-2.2669 0.0545-4.5617 0.11225-6.84-0.0189-6.7866 0.0377-13.575-0.0283-20.361-0.21514-2.9856-2.9814-5.4657-5.9697-5.3769-15.129 0.0106-30.26-0.0211-45.389 0.0158l-0.80844 0.0642z"
                            fill="#00f" strokeLinecap="round" strokeLinejoin="round" stroke="#00f"/>
                        <path
                            d="m608.06 291.35c-2.7556 0.40447-4.9928 2.9308-5.0145 5.7231-0.0606 8.4266-0.064 16.857-0.0814 25.285-0.0257 2.7672 2.1132 5.3527 4.8527 5.7966 2.2664 0.23637 4.5602 0.0542 6.8378 0.1115 10.504-0.0106 21.01 0.0211 31.513-0.0158 2.7413-0.0125 5.2652-2.1561 5.7083-4.8636 0.2371-2.267 0.0544-4.5618 0.11188-6.8401-0.0189-6.6336 0.0378-13.269-0.0284-19.902-0.21734-2.9842-2.981-5.466-5.9696-5.3749-12.374 0.0106-24.749-0.0211-37.121 0.0158l-0.80844 0.0642z"
                            fill="#00f" strokeLinecap="round" strokeLinejoin="round" stroke="#00f"/>
                        <path
                            d="m468.39 291.4c-2.7178 0.40316-4.9378 2.8731-4.9871 5.6294-0.0575 8.397-8e-3 16.798-0.0246 25.197-0.033 2.5378 1.6793 4.9569 4.0996 5.7363 1.9608 0.53635 4.0209 0.21931 6.0277 0.3136 13.926 0.0264 27.853 0.0948 41.777 0.095 2.7741-4e-3 5.303-2.204 5.7212-4.9416 0.19061-2.6727 0.0383-5.3619 0.0872-8.0413-0.0151-6.2049 0.0302-12.411-0.0227-18.615-0.17547-3.0127-2.9539-5.5431-5.9675-5.4531-15.301 0.0106-30.603-0.0211-45.902 0.0158l-0.80844 0.0642z"
                            fill=" var(--grayColor)" strokeLinecap="round" strokeLinejoin="round"
                            stroke=" var(--grayColor)"/>
                        <path
                            d="m673.05 290.85c-2.7178 0.40478-4.9486 2.8685-5.0055 5.6274-0.0824 8.5518-0.0571 17.108-0.098 25.662-0.0391 2.5188 1.6544 4.929 4.0577 5.7047 1.9632 0.54668 4.0295 0.21598 6.0404 0.307 10.081-0.0105 20.164 0.021 30.244-0.0158 2.9617 1e-3 5.6491-2.5288 5.7797-5.4944 0.0942-4.2333 0.0137-8.4734 0.0405-12.709-0.0246-4.6217 0.0493-9.2468-0.0371-13.866-0.25774-2.9515-3.0016-5.3826-5.9609-5.2949-11.417 0.0106-22.835-0.0211-34.25 0.0158-0.27013 0.0214-0.54026 0.0428-0.81039 0.0643z"
                            fill=" var(--grayColor)" strokeLinecap="round" strokeLinejoin="round"
                            stroke=" var(--grayColor)"/>
                        <path
                            d="m832.1 291.12c-2.7178 0.40316-4.9378 2.8731-4.9871 5.6294-0.0575 8.5734-8e-3 17.151-0.0246 25.726-0.0299 2.5222 1.6634 4.9361 4.0738 5.7092 1.9638 0.55286 4.0332 0.21807 6.0457 0.31029 14.483-0.0105 28.967 0.0211 43.449-0.0158 2.7516-0.0109 5.2872-2.1544 5.7462-4.8688 0.24644-2.2956 0.08-4.6211 0.14938-6.929 0.0237-6.7189 0.10306-13.439 0.0922-20.157-0.13515-3.0197-2.915-5.5795-5.9332-5.4843-15.934 0.0106-31.87-0.0211-47.803 0.0158l-0.80844 0.0642z"
                            fill=" var(--grayColor)" strokeLinecap="round" strokeLinejoin="round"
                            stroke=" var(--grayColor)"/>
                        <path
                            d="m1020.1 290.67c-2.7185 0.40281-4.9377 2.8729-4.9871 5.6294-0.058 8.8014-0.01 17.607-0.025 26.41-0.1328 2.2994 1.0658 4.6391 3.1312 5.7148 1.9876 1.1016 4.3316 0.62914 6.5001 0.73983 18.422 0.0294 36.845 0.10056 55.265 0.10397 2.7735-7e-3 5.3056-2.2062 5.7199-4.9458 0.1934-2.6724 0.039-5.3616 0.088-8.0409-0.019-6.7653 0.037-13.533-0.028-20.297-0.2049-2.9894-2.9694-5.4836-5.9624-5.3946-19.631 0.0106-39.264-0.0211-58.895 0.0158-0.2695 0.0214-0.539 0.0428-0.8084 0.0642z"
                            fill=" var(--grayColor)" strokeLinecap="round" strokeLinejoin="round"
                            stroke=" var(--grayColor)"/>
                        <path
                            d="m1115.2 297.69c-0.7992 0.32552-0.3844 1.372-0.4883 2.0344-0.063 0.56692-0.014 1.4566 0.7715 1.3992 9.0797 0.0117 18.162-0.0235 27.24 0.0176 1.8646 0.0751 3.5813 1.3986 4.1426 3.1758 0.4525 1.5647 0.1608 3.2388 0.2442 4.8512 0.017 6.9791-0.035 13.963 0.026 20.939 0.1968 0.87452 1.3047 0.48761 1.9455 0.57318 0.7994-0.0931 1.7137 0.20926 2.4328-0.20117 0.4174-0.7289 0.1071-1.6593 0.2032-2.4703-0.01-9.8942 0.017-19.791-0.013-29.684-0.074-0.93601-1.2246-0.62061-1.8587-0.6723-11.487 9e-3 -22.976-0.0173-34.462 0.013l-0.099 0.013z"
                            fill=" var(--grayColor)" strokeLinecap="round" strokeLinejoin="round"
                            stroke=" var(--grayColor)"/>
                        <path
                            d="m1120.1 243.4c-1.6541 0.31423-2.7945 1.9638-2.6504 3.6164 0.032 3.4297-0.064 6.8656 0.049 10.291 0.1591 1.7742 1.9182 3.0618 3.6535 2.9077 4.8182-5e-3 9.6397 0.0731 14.456 0.0166 1.7503-0.18268 3.0475-1.9248 2.8515-3.65-0.023-3.4696 0.045-6.9436-0.033-10.411-0.193-1.7581-1.9528-3.0444-3.6832-2.8438-4.7345 0.0196-9.473-0.0392-14.205 0.0293-0.1459 0.0143-0.2918 0.0286-0.4377 0.043z"
                            fill=" var(--grayColor)" strokeLinecap="round" strokeLinejoin="round"
                            stroke=" var(--grayColor)"/>
                        <path
                            d="m1121.3 388.92c-2.7157 0.40548-4.9402 2.8747-4.9872 5.6314-0.057 8.8674-0.01 17.739-0.024 26.608 0.011 9.3666-0.021 18.735 0.016 28.101 0.01 2.7809 2.2169 5.3134 4.9608 5.7316 2.6731 0.1933 5.3629 0.0391 8.0429 0.0885 10.007-0.0105 20.016 0.021 30.022-0.0158 2.7571-0.0144 5.2942-2.1593 5.7595-4.8782 0.2454-2.2948 0.083-4.6187 0.1557-6.9254 0.1061-16.28 0.2404-32.559 0.3288-48.839-0.086-3.0122-2.8057-5.622-5.8194-5.5788-12.548 3e-3 -25.098-0.0222-37.646 0.0127-0.2695 0.0214-0.5389 0.0428-0.8084 0.0642z"
                            fill="url(#patternEscaliersBtoT)" strokeLinecap="round" strokeLinejoin="round"
                            stroke="#0ae"/>
                        <path
                            d="m1117.6 307.57c-1.8127-0.0558-3.429 1.5342-3.3828 3.351 0.01 5.5676-0.04 11.14 0.025 16.705 0.051 1.8425 1.8563 3.2576 3.6516 3.0819 6.5882-0.028 13.18 0.0221 19.766-0.0547 1.8494-0.0533 3.2693-1.8619 3.096-3.6648-0.018-5.5147 0.037-11.033-0.027-16.545-0.1676-1.7672-1.9275-3.0871-3.6676-2.8849-6.4871 4e-3 -12.974 8e-3 -19.461 0.0115z"
                            fill="url(#patternAscenseur)" strokeLinecap="round" strokeLinejoin="round" stroke="#0ae"/>
                        <path
                            d="m573.96 388.6c-2.7185 0.40209-4.94 2.8724-4.989 5.6294-0.0575 8.8014-8e-3 17.607-0.0246 26.41 0.0158 9.5198-0.0317 19.042 0.0238 28.56 0.0401 2.9594 2.617 5.603 5.5802 5.6876 5.6026 0.0766 11.211 0.0109 16.816 0.0328 7.2057-0.0134 14.413 0.0268 21.618-0.0201 2.9788-0.16513 5.504-2.8891 5.445-5.8716-0.0679-18.225-0.10521-36.453-0.20358-54.677-0.0162-2.786-2.228-5.3223-4.9781-5.7421-2.6427-0.19552-5.3026-0.0401-7.9524-0.0898-10.176 0.0106-20.353-0.0212-30.528 0.0159l-0.80649 0.0642z"
                            fill="url(#patternEscaliersBtoT)" strokeLinecap="round" strokeLinejoin="round"
                            stroke="#0ae"/>
                        <path
                            d="m996.94 256.32c-1.6551 0.31022-2.7953 1.963-2.6523 3.6144 0.13587 2.0233-0.26611 4.1536-1.5957 5.7449-1.5188 1.9565-4.0535 2.9278-6.4953 2.7402-23.486-7e-3 -46.974 0.013-70.46-0.01-2.2624-0.0586-4.4409-1.2264-5.748-3.0723-1.1138-1.5254-1.4442-3.4533-1.3477-5.309 0.1802-1.9219-1.5678-3.7039-3.4949-3.5445-3.5869 0.0258-7.1788-0.0518-10.763 0.0392-1.8054 0.10539-3.1539 1.886-2.9886 3.6476 0.11392 2.054-0.42595 4.1992-1.8556 5.7282-1.4507 1.6988-3.7211 2.558-5.9354 2.4639-149.4-0.0195-298.8-0.039-448.19-0.0585-1.8123-0.0539-3.4268 1.5323-3.383 3.349-0.0191 19.47 0.0196 38.942-0.0193 58.413-0.17313 3.4498-3.1034 6.4811-6.5486 6.7569-4.5728 0.0892-9.1517 0.0124-13.727 0.0381-2.8219 0.037-5.6511-0.0754-8.4682 0.0588-1.7196 0.22032-2.941 1.9347-2.7896 3.628 0.0131 11.246-0.0261 22.495 0.0196 33.739 8e-3 1.8412 1.7598 3.3271 3.5671 3.1877 9.6043-0.011 19.21 0.0219 28.814-0.0164 1.8089-0.11675 3.1928-1.9026 2.9884-3.6786 0.0196-5.12-0.0391-10.244 0.0294-15.362 0.10559-2.665 1.8341-5.1602 4.2679-6.2367 2.1269-0.98697 4.5282-0.55622 6.7957-0.64707 38.13 0.0575 76.262 0.0896 114.39 0.16287 2.6225 0.0701 5.1587 1.6486 6.2961 4.024 1.1557 2.1358 0.70351 4.6385 0.79573 6.9651 0.0196 5.1821-0.0392 10.368 0.0294 15.548 0.0551 1.8451 1.8581 3.2609 3.6573 3.0882 14.613-0.0109 29.227 0.0219 43.839-0.0164 1.8084-0.11708 3.1931-1.9026 2.9884-3.6786 0.0196-6.4215-0.0391-12.847 0.0294-19.266 0.10553-2.6277 1.7856-5.103 4.175-6.1931 2.1415-1.0485 4.5895-0.60576 6.8886-0.69972 159.55 0.0842 319.09 0.15471 478.64 0.24741 3.4534 5e-3 6.6061 2.8004 7.0485 6.2214 0.1769 2.4145 0.03 4.8455 0.078 7.2664 0.02 4.4334-0.039 8.8707 0.029 13.302 0.053 1.8453 1.8603 3.2568 3.6574 3.084 14.116-0.0225 28.233-2e-3 42.348-0.0513 1.8101-0.11944 3.1923-1.9053 2.9884-3.6824 0.074-1.9946-0.1842-4.0281 0.2165-5.9926 0.601-2.5945 2.7385-4.7478 5.3323-5.3568 1.9784-0.42034 4.0311-0.14999 6.0422-0.22718 3.0336-0.0216 6.0711 0.0427 9.1024-0.0312 1.7944-0.1967 3.0715-2.0085 2.8476-3.7637 0-30.555 0.01-61.111-0.01-91.666-0.068-1.8481-1.8749-3.3003-3.6891-3.0879h-166.3c-2.2442-0.0504-4.4417-1.1482-5.759-2.9765-1.1641-1.502-1.5241-3.4494-1.4373-5.3148 0-1.8877-1.8413-3.4114-3.692-3.1911-3.405 0.0261-6.8151-0.0521-10.217 0.0392-0.1121 0.011-0.2242 0.0221-0.3363 0.0331zm-110.78 27.754c3.4392-0.0488 6.6425 2.6604 7.1518 6.0642 0.2311 2.0961 0.0471 4.2184 0.106 6.3249-0.0144 10.931 0.0287 21.863-0.0215 32.793-0.20486 3.4592-3.1837 6.4659-6.6422 6.6968-7.4408 0.065-14.885 9e-3 -22.327 0.0278h-401.26c-2.2441-0.0504-4.4417-1.1482-5.759-2.9765-1.1874-1.5291-1.532-3.5174-1.4344-5.4145 0.013-12.146-0.0261-24.295 0.0196-36.439 0.0817-2.6624 1.7593-5.1903 4.1844-6.2933 2.1399-1.0516 4.5885-0.61023 6.887-0.70555 139.7-0.0258 279.4-0.0516 419.1-0.0774zm130 0.24218c23.086 9e-3 46.172-0.0182 69.258 0.0137 3.4766 0.13374 6.5504 3.0821 6.8272 6.5505 0.089 4.5728 0.012 9.1517 0.038 13.727-0.014 8.464 0.029 16.929-0.022 25.393-0.2048 3.4259-3.1301 6.4153-6.5545 6.6777-4.4703 0.0808-8.9464-7e-3 -13.419 9e-3 -18.776-0.0483-37.552-0.0717-56.327-0.13559-2.6237-0.0698-5.1584-1.651-6.296-4.0279-1.1564-2.1355-0.7031-4.6385-0.7958-6.9651 0.013-11.415-0.026-22.832 0.02-34.245 0.082-2.6622 1.7594-5.1865 4.1822-6.292 0.9581-0.47336 2.026-0.66313 3.0893-0.70424zm99.064 7.4707c11.633 0.0105 23.266-0.0209 34.898 0.0156 3.4498 0.17313 6.4811 3.1034 6.7569 6.5486 0.089 4.5728 0.012 9.1517 0.038 13.727-0.021 5.8394 0.043 11.682-0.032 17.519-0.2471 3.4197-3.2128 6.3602-6.6338 6.5817-7.0759 0.0405-14.156-0.0414-21.233-0.0478-4.7318-0.0362-9.4676 5e-3 -14.197-0.0795-2.6652-0.11621-5.1518-1.8471-6.2343-4.2782-0.9938-2.1625-0.5578-4.5993-0.6546-6.9023 0.013-8.6957-0.026-17.394 0.02-26.088 0.082-2.6622 1.7593-5.1865 4.1821-6.292 0.9581-0.47336 2.0261-0.66312 3.0893-0.70423z"
                            fill="#0ae" strokeLinecap="round" strokeLinejoin="round" stroke="#0ae"/>
                    </g>
                </svg>

                <div style={{backgroundColor: this.state.eventColor}}
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