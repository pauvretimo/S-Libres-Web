import React from "react";
import "../../DefaultSVG.css"
import DefaultSVG from "../../DefaultSVG";
import ascenseurs from "../../../images/elevatorWeb.svg";

class DSEG_RDC extends DefaultSVG {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="scaling-svg-container">
                <svg version="1.1" viewBox="0 0 927.69 669.78" className="scaling-svg" height={this.props.isLandScape ? "100%" : "80%"} width={this.props.isLandScape ? "80%" : "100%"} style={{transform: this.props.isLandScape ? "translate(-50%, -50%)" : "translate(-50%, -50%) rotate(90deg)"}}>
                    <g transform="translate(-201.83 532.32)">
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
                            d="m922.81-197.8c-1.1663 0.2476-1.6559 1.5186-1.5 2.6 0.048 3.2223-0.0115 6.4518 0.1035 9.6695 0.21621 1.1946 1.4914 1.821 2.6214 1.6506 4.2625 0.0261 8.5297 0.1313 12.79 0.0496 1.2582-0.19865 1.9217-1.5659 1.7282-2.7436-0.0349-3.2366 0.0417-6.4802-0.0631-9.7125-0.2156-1.1816-1.4958-1.7565-2.6-1.5762-4.2725 0.0223-8.5499-0.0446-12.819 0.0334-0.0868 0.01-0.17363 0.0194-0.26045 0.0291z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternAscenseur)"/>
                        <path
                            d="m925.81-356.74c-1.651 0.31147-2.7716 1.9714-2.6193 3.6144 0.0424 3.2735-5e-3 6.5518 0.0937 9.8222 0.20416 1.8362 2.0464 3.1665 3.8517 2.9534 3.7443 0.0224 7.4941 0.12258 11.235 0.0432 1.8621-0.23347 3.1377-2.1624 2.9138-3.9743-0.0306-3.2257 0.0327-6.4561-0.0572-9.6789-0.19669-1.7807-1.9927-3.059-3.7382-2.8524-3.78 0.0259-7.565-0.0519-11.342 0.0391-0.11275 0.0111-0.22549 0.0221-0.33824 0.0332z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternAscenseur)"/>
                        <path
                            d="m599.07-94.229c-2.2851 0.30865-4.2628 1.9201-5.132 4.0407-15.931 35.065-31.883 70.122-47.802 105.19-1.103 2.3734-0.17478 5.443 2.0883 6.7713 1.8738 0.96439 3.936 1.5169 5.8907 2.3025 26.726 9.8475 53.446 19.716 80.176 29.55 2.486 0.93827 5.5174-0.25836 6.6746-2.6539 0.88361-2.2159 1.3962-4.5669 2.1227-6.8396 10.227-34.741 20.481-69.473 30.69-104.22 0.82451-3.1307-1.0456-6.6527-4.0938-7.7363-22.487-8.6786-44.966-17.378-67.457-26.044-1.0138-0.36484-2.0878-0.48477-3.1579-0.36453z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="A 101 V-DSEG"/>
                        <path
                            d="m681.57-39.881c-2.4822 0.27643-4.6917 2.0921-5.4039 4.4919-6.9062 23.668-13.753 47.356-20.637 71.032-3.855 13.318-7.7525 26.625-11.581 39.949-0.7209 2.5301 0.70545 5.41 3.1441 6.3883 2.3028 0.72493 4.71 1.0833 7.0565 1.6537 27.514 6.0455 55.024 12.113 82.54 18.145 2.5564 0.58831 5.3786-0.95265 6.2135-3.4492 0.56254-2.0358 0.67723-4.1728 1.0448-6.2519 5.3015-36.14 10.634-72.275 15.916-108.42 0.34187-3.1807-1.9668-6.3533-5.0957-7.0137-23.691-5.4649-47.378-10.952-71.072-16.403-0.70761-0.13662-1.4064-0.17648-2.1256-0.12444z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="A 102 V-DSEG"/>
                        <path
                            d="m771.35 2.4688c-2.7945 0.24645-5.2773 2.468-5.7334 5.2509-1.0217 6.7707-1.9203 13.564-2.8946 20.343-4.4025 31.295-8.8269 62.588-13.216 93.884-0.38196 2.5939 1.3719 5.2802 3.9206 5.9278 2.0776 0.40867 4.2224 0.36705 6.3284 0.57913 28.264 2.0237 56.528 4.0697 84.792 6.0795 2.6158 0.2105 5.1831-1.7231 5.6458-4.3161 0.25344-2.1669 0.0614-4.367 0.12135-6.5475-8e-3 -36.925 0.0156-73.85-0.0117-110.77-0.11694-3.0158-2.8439-5.6098-5.8624-5.5709-7.0145 0.024502-14.025-0.306-21.014-0.89818-17.037-1.3161-34.073-2.6771-51.111-3.9651-0.322 0.00216-0.64401 0.00432-0.96602 0.00647z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="A 103 V-DSEG"/>
                        <path
                            d="m446.11-72.395c-2.7527 0.40465-4.982 2.9345-4.9958 5.7232-0.0417 15.973-6e-3 31.948-0.0179 47.922 0.0351 3.2948-0.0717 6.5953 0.0561 9.8864 0.22494 2.8883 2.8613 5.3061 5.755 5.313 18.535 0.04539 37.072 0.019213 55.608 0.037081 11.556-0.00829 23.114 0.033678 34.669-0.00603 3.8125-0.048493 7.4698-2.3868 9.1155-5.8261 6.2908-13.466 12.508-26.968 18.771-40.448 2.8647-6.2088 5.7743-12.398 8.6108-18.619 0.70765-1.8457-0.80482-4.0534-2.7818-4.0533-41.261-0.02155-82.523-0.0031-123.78-0.0092-0.33529 0.02669-0.67057 0.05339-1.0059 0.08008z"
                            fill=" var(--grayColor)" strokeLinecap="round" strokeLinejoin="round"
                            stroke=" var(--grayColor)"/>
                        <path
                            d="m326.96-72.27c-2.7131 0.40367-4.9337 2.868-4.9813 5.6216-0.0573 8.8674-8e-3 17.739-0.0245 26.608 0.0106 10.241-0.0211 20.484 0.0158 30.724 0.0106 2.7786 2.212 5.3162 4.9572 5.7323 2.7078 0.19201 5.432 0.038808 8.1465 0.087908 31.276-0.00525 62.552 0.010501 93.828-0.00788 2.7768 0.024721 5.3598-2.1265 5.808-4.8715 0.2371-2.267 0.0544-4.5618 0.11188-6.8401-8e-3 -17.133 0.0156-34.267-0.0117-51.4-0.11662-3.0227-2.852-5.6257-5.878-5.5835-33.688-0.04905-67.376-0.10912-101.06-0.14121-0.3027 0.02347-0.6054 0.04693-0.90811 0.0704z"
                            fill=" var(--grayColor)" strokeLinecap="round" strokeLinejoin="round"
                            stroke=" var(--grayColor)"/>
                        <path
                            d="m210.36-72.062c-2.7394-0.04257-5.3538 1.9931-5.8687 4.7025-0.31747 1.9227-0.0894 3.8937-0.15862 5.8365 0.0106 17.431-0.0211 34.863 0.0159 52.293 0.0125 2.7413 2.1561 5.2652 4.8636 5.7083 2.267 0.2371 4.5618 0.054403 6.8401 0.11188 31.256-0.00528 62.513 0.010561 93.769-0.00792 2.7372 0.017108 5.3072-2.0678 5.7846-4.7743 0.27889-2.0611 0.0709-4.1605 0.13525-6.2374-8e-3 -17.442 0.0156-34.884-0.0117-52.326-0.11782-3.0176-2.8585-5.6116-5.88-5.5524-33.163 0.07681-66.326 0.16468-99.489 0.24574z"
                            fill=" var(--grayColor)" strokeLinecap="round" strokeLinejoin="round"
                            stroke=" var(--grayColor)"/>
                        <path
                            d="m1092.1-526.55c-1.5084 0.21395-2.5311 1.4865-3.0393 2.837-1.7649 3.6213-3.435 7.2927-5.2592 10.883-1.7404 3.2752-5.3654 5.4421-9.076 5.409-2.8805 0.0948-5.4398-1.4243-8.0629-2.3905-7.9743-3.2139-15.926-6.4873-23.914-9.6638-4.5337-1.757-9.5564-2.0942-14.316-1.1614-24.822 4.4018-49.649 8.7835-74.468 13.198-2.962 0.5264-5.4627 2.9734-5.9875 5.9446-0.30299 2.2394-0.0865 4.5179-0.15196 6.7738 4e-3 39.827-8e-3 79.655 6e-3 119.48 0.0228 3.6256 1.5953 7.2029 4.2828 9.6421 2.284 1.897 4.8443 3.4338 7.2532 5.167 3.926 2.674 7.7851 5.4493 11.754 8.0576 3.869 2.4521 8.4749 3.6442 13.044 3.5706 27.725 6e-3 55.451-0.0126 83.175 9e-3 1.59 0.34268 3.3054 0.42507 4.8162-0.28016 1.4338-0.58983 2.6999-1.6884 3.2444-3.1668 1.77-3.0767 4.7265-5.4481 8.1423-6.436 2.9706-0.89977 6.1087-0.483 9.1632-0.56806 3.71-0.0311 7.4243 0.1052 11.131-0.043 3.9819-0.23852 7.845-1.936 10.758-4.6561 2.6067-2.4875 5.2154-4.9799 7.7555-7.5354 3.091-3.1693 4.7476-7.6089 4.6632-12.021-0.01-34.09 0.013-68.18-0.01-102.27-0.014-0.75781-0.1333-1.9932-0.348-2.9984-0.6361-3.2118-2.2593-6.2876-4.4515-8.6033-9.0137-9.3825-18.011-18.783-27.036-28.153-0.7974-0.80357-1.9466-1.1962-3.0684-1.0269z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="A 250 V-DSEG"/>
                        <path
                            d="m427.38-443.24c-1.3853 0.36915-1.6009 1.9865-2.2072 3.0718-1.7965 3.8945-3.51 7.8315-5.3583 11.7-1.3295 2.5982-4.7123 3.8172-7.4022 2.6997-1.8018-0.77059-3.6063-1.7881-5.6356-1.6655-2.298 0.13573-4.3573 1.2968-6.5112 2.004-12.595 4.7274-25.203 9.4268-37.791 14.172-1.1364 0.40389-1.5358 1.8346-0.96501 2.8487 0.78297 2.121 1.7581 4.1785 2.4136 6.342 0.69057 2.8715-1.102 6.0278-3.9017 6.9457-1.766 0.65684-3.6263 1.4051-4.7407 3.0156-1.1892 1.7601-1.604 3.8955-2.3927 5.844-4.3888 12.36-8.8066 24.712-13.177 37.077-0.43015 1.1439 0.41273 2.3877 1.5656 2.6246 2.189 0.81153 4.4457 1.458 6.5898 2.3795 2.6198 1.3259 3.8408 4.7387 2.6886 7.4338-0.68071 1.7474-1.4372 3.6177-0.94939 5.5197 0.50004 1.9713 1.8501 3.5744 2.7924 5.3458 6.7894 11.425 13.554 22.868 20.359 34.282 0.62999 1.1005 2.1755 1.1759 3.0985 0.40693 1.947-1.1134 3.7918-2.4186 5.8095-3.3995 2.5776-1.1145 5.8145-0.019 7.2406 2.3892 1.4655 2.4309 2.7789 4.9592 4.3167 7.3431 0.97765 1.3769 2.8146 1.7726 4.3965 1.415 13.818-1.8524 27.63-3.7583 41.453-5.5771 5.5159-0.71149 11.091-0.32259 16.63-0.47573 1.2142-0.0594 1.9514-1.3278 1.7917-2.4566 0.0307-3.1205-0.0621-6.2463 0.0477-9.3634 0.15962-3.0717 2.2636-5.8571 5.0811-7.0293 8.8554-4.1039 17.735-8.1622 26.575-12.295 1.6641-0.77952 2.5198-2.6643 2.3607-4.4464-9.4e-4 -20.546 0.0278-41.093 8e-3 -61.638-0.0748-1.7727-1.4169-3.276-3.0674-3.8155-8.7641-3.9769-17.509-8.0113-26.285-11.952-2.453-0.38752-4.4202-2.9197-4.0087-5.3911 0.41658-2.0528 2.3761-3.504 4.3526-3.914 1.4319-0.30726 2.8692 0.0827 4.1876 0.63364 1.0894 0.27225 2.0561-0.58999 2.3482-1.5886 1.1508-2.6265 2.4192-5.2093 3.4985-7.8624 0.31128-1.1693-0.601-2.2497-1.6842-2.5649-14.085-6.6386-28.159-13.305-42.251-19.926-0.40469-0.1762-0.84378-0.22211-1.2764-0.13189z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="A 150 V-DSEG"/>
                        <path
                            d="m641.97-461.84c-6.4328 2.0242-12.757 4.3747-19.137 6.5546-7.3609 2.579-14.743 5.107-22.091 7.7178-1.2489 0.50574-0.95472 2.06-1.4107 3.0889-0.67334 1.9044-2.5221 3.158-4.4791 3.4323-8.0919 1.8667-16.2 3.6712-24.282 5.5767-2.5175 0.65043-4.488 2.4556-6.6709 3.7723-2.2028 1.43-4.3722 2.9322-6.5959 4.3172-0.95553-0.012-0.58969 0.6413-0.33185 1.2403 0.24974 0.55071 0.48941 1.2236 0.086 1.7532 2.2868 5.2278 4.4322 10.525 6.7324 15.744 0.95184-0.21758 1.8728-0.78549 2.8118-1.1383 3.9303-1.6917 7.8369-3.4444 11.782-5.098 2.0325-0.7459 4.4402 0.41306 5.1964 2.4258 0.62125 1.5453 1.6846 3.1582 1.1266 4.8913-0.37931 1.5435-1.7496 2.5849-3.2123 3.0286-9.6419 3.967-19.297 7.9058-28.931 11.89-1.0911 0.48979-0.65347 1.8517-0.74264 2.7898 8e-3 24.668-0.0159 49.338 0.0119 74.005 0.0368 1.1971 1.4633 1.3179 2.299 1.7575 9.5048 3.9413 19.035 7.8272 28.524 11.803 1.9542 0.98447 2.771 3.5605 1.8382 5.5211-0.51483 1.4827-0.98707 3.1994-2.5001 3.9742-1.4071 0.82636-3.1259 0.49878-4.5039-0.21626-4.2343-1.7507-8.4451-3.5722-12.694-5.2787-0.47757 0.53994-0.63157 1.383-0.98165 2.0393-2.2131 5.2066-4.4951 10.389-6.6651 15.611-0.10932 0.73658 0.87843 0.92887 1.3101 1.3407 2.487 1.6018 4.881 3.3562 7.4354 4.848 2.3058 1.09 4.8509 1.5154 7.275 2.2694 7.5446 2.1154 15.109 4.17 22.641 6.3235 2.0988 0.66304 3.5101 2.6777 3.7826 4.8134 0.0866 1.0803 1.0138 1.7716 1.9978 2.0127 11.749 4.4343 23.48 8.9205 35.241 13.322 3.5489 1.2119 7.2478 1.9068 10.87 2.8622 6.9374 1.7107 13.875 3.4214 20.812 5.132 0.0814-1.3711-0.30891-2.9187 0.62167-4.0862 0.6948-0.94095 1.9553-1.2064 3.0713-1.1033 1.6225 0.0543 3.2661-0.11092 4.8752 0.087 0.56093 0.34182 0.98376 0.23509 1.422-0.26279 5.5676-4.2415 11.101-8.5316 16.69-12.743 1.753-1.2897 3.9855-1.6048 6.1087-1.4935 18.276-0.0107 36.552 0.0214 54.827-0.0161 3.212-0.0781 6.3006-1.0751 9.4365-1.6748 4.9458-1.0945 9.9145-2.1179 14.846-3.2564 0.62364-0.43726 0.19988-1.3391 0.32422-1.9684-1e-3 -60.164 3e-3 -120.33-2e-3 -180.49-0.0973-0.85425-1.1962-0.69006-1.7894-0.93676-6.5085-1.5433-12.999-3.1697-19.519-4.6608-2.7868-0.49703-5.6348-0.20332-8.4498-0.2833-17.304-9e-3 -34.609 0.0188-51.912-0.0141-2.1745-0.0305-4.1649-1.0908-5.781-2.4808-5.1941-3.9887-10.388-7.9774-15.582-11.966-1.4504 1.2575-3.4731 0.84659-5.2286 0.90205-2.1167-0.034-3.9718-1.8623-4.0274-3.9802-0.16408-0.39165 0.29868-1.5769-0.30936-1.3513-8.7224 2.5507-17.445 5.1014-26.167 7.6521z"
                            fill="#0f0" className="room" strokeLinecap="round" strokeLinejoin="round" stroke="#0f0"
                            id="A 500 V-DSEG"/>
                        <path
                            d="m946.78-358.82c-0.11397 2.1414-0.0163 4.3356-0.0488 6.4973-0.0229 4.219 0.0457 8.4422-0.0341 12.658-0.1375 2.9147-2.7122 5.4236-5.6222 5.5238-5.9814 0.0654-11.97-0.0226-17.951 0.0439-1.2538 0.01-2.0639 1.2993-1.8911 2.4675 0.0149 7.383-0.0298 14.769 0.0223 22.15 0.0107 1.253 1.2999 2.0628 2.4675 1.8911 13.117 9e-3 26.234-0.0182 39.35 0.0137 3.019 0.12779 5.6124 2.8586 5.5801 5.8808 5e-3 23.768 6.5e-4 47.536 2e-3 71.305-0.45702 0.71603-0.66189 1.6519-1.4564 2.0657-0.84 0.76943-0.10698 1.8839-0.26623 2.8335 0.0374 1.9428-0.0775 3.8941 0.0625 5.8312 0.24837 1.1865 1.523 1.7184 2.6332 1.5793 3.8081 0.025 7.6191 0.12839 11.425 0.1043 1.1953-0.14893 1.8199-1.4306 1.6289-2.5355-0.0142-4.2055 0.0283-8.4171-0.0212-12.619-0.73447-2.6804 1.2441-5.8569 4.0742-6.0821 3.0565 0.0147 5.7664 2.7198 5.7865 5.7762 0.0293 6.3734-0.0276 12.75 0.0284 19.122 8e-3 1.2514 1.2944 2.0656 2.4618 1.8911 31.336-7e-3 62.673 0.0146 94.008-0.0109 1.2401 0.0298 2.1418-1.1977 1.9827-2.3789-0.012-14.562 0.023-29.126-0.018-43.686-0.1051-1.1912-1.3543-1.9131-2.4727-1.7288-8.331-0.0153-16.664 0.0306-24.994-0.0229-2.9114-0.10178-5.4787-2.6198-5.6119-5.534-0.089-5.0929 0.013-10.194-0.051-15.288-0.1084-1.1923-1.3561-1.9137-2.4764-1.7288-2.0725-0.064-4.1635 0.14293-6.2225-0.13362-2.6971-0.51719-4.7656-3.0715-4.7625-5.8102-0.015-16.389 0.023-32.78-0.019-49.167-0.1039-1.1926-1.3541-1.9126-2.4727-1.7288-21.128-7e-3 -42.257 0.0135-63.385-0.0101-3.1747-0.0391-6.2672-1.1972-8.795-3.0963-7.6224-5.343-15.223-10.723-22.859-16.043-0.0309 0.01-0.052-0.0448-0.0839-0.0304z"
                            fill=" var(--grayColor)" strokeLinecap="round" strokeLinejoin="round"
                            stroke=" var(--grayColor)"/>
                        <path
                            d="m445.25-137.09c-3.1788 0.11257-6.1088 2.9544-5.9236 6.2082 5e-3 7.8213 0.0497 15.645 0.20908 23.464 0.22959 3.1028 3.173 5.6621 6.2778 5.4785 21.465-8e-3 42.931 0.0156 64.396-0.0117 3.0114-0.11679 5.6023-2.8496 5.5484-5.8644-0.032-7.8496-0.0125-15.702-0.0886-23.55-0.0466-2.9706-2.6355-5.6138-5.6087-5.6997-5.634-0.076-11.274-0.0109-16.91-0.0326-15.967 5e-3 -31.934-0.0104-47.9 8e-3z"
                            fill=" var(--grayColor)" strokeLinecap="round" strokeLinejoin="round"
                            stroke=" var(--grayColor)"/>
                        <path
                            d="m389.12-143.31c-2.7178 0.40316-4.9378 2.8731-4.9871 5.6294-0.0575 8.8014-8e-3 17.607-0.0246 26.41 0.05 2.1397-0.31942 4.5078 1.0205 6.3579 1.187 1.8404 3.4314 2.7734 5.5814 2.6157 12.347-0.0657 24.696-0.0811 37.043-0.17824 3.045-0.15543 5.6152-2.9607 5.5234-6.0047-0.0134-9.8117 0.0268-19.625-0.0201-29.436-0.16639-2.9841-2.8853-5.5172-5.8736-5.4722-12.484 5e-3 -24.971-0.0219-37.454 0.0135l-0.80844 0.0642z"
                            fill=" var(--grayColor)" strokeLinecap="round" strokeLinejoin="round"
                            stroke=" var(--grayColor)"/>
                        <path
                            d="m642.32-141.22c-1.6553 0.30942-2.7972 1.9623-2.6523 3.6145 0.0373 2.7076-0.0757 5.4224 0.0586 8.1252 0.21904 1.7204 1.9342 2.943 3.6281 2.7915 12.294-0.0131 24.59 0.0262 36.883-0.0196 1.8027-0.12467 3.1768-1.9057 2.9708-3.6772-0.0247-2.6961 0.0486-5.3969-0.0352-8.0902-0.21058-1.7825-2.0159-3.0376-3.7598-2.8164-12.186 0.0131-24.374-0.0261-36.558 0.0196-0.17845 0.0176-0.35689 0.0351-0.53534 0.0527z"
                            fill=" var(--grayColor)" strokeLinecap="round" strokeLinejoin="round"
                            stroke=" var(--grayColor)"/>
                        <path
                            d="m692.1-141.33c-1.6985 0.31203-2.8243 2.0348-2.6523 3.7144 0.0375 2.7706-0.0761 5.5485 0.0586 8.3143 0.21883 1.7304 1.9414 2.9555 3.6437 2.8082 7.9825 0.0143 15.967 0.0781 23.948 0.0617 1.8003-0.11499 3.1782-1.8939 2.9727-3.6619-0.0219-2.8206 0.0431-5.6451-0.0312-8.4633-0.20107-1.79-2.0074-3.0725-3.7637-2.8457-7.8798 0.0131-15.762-0.0261-23.64 0.0196-0.17845 0.0176-0.35689 0.0351-0.53534 0.0527z"
                            fill=" var(--grayColor)" strokeLinecap="round" strokeLinejoin="round"
                            stroke=" var(--grayColor)"/>
                        <path
                            d="m325.95-143.57c-1.6552 0.30929-2.797 1.9626-2.6523 3.6144 0.0129 11.685-0.0258 23.373 0.0194 35.057 0.01 1.85 1.7572 3.3538 3.5771 3.2282 7.2403 0.0383 14.483 0.12912 21.722 0.13462 1.8335 9e-3 3.3221-1.7339 3.1797-3.5333-0.0111-11.861 0.0222-23.725-0.0166-35.585-0.11418-1.8086-1.9012-3.1972-3.6783-2.9885-7.2048 0.0131-14.412-0.0262-21.615 0.0196-0.17845 0.0176-0.3569 0.0351-0.53534 0.0527z"
                            fill="#00f" strokeLinecap="round" strokeLinejoin="round" stroke="#00f"/>
                        <path
                            d="m360.46-143.51c-1.6549 0.3109-2.7976 1.9617-2.6523 3.6144 0.013 11.533-0.0261 23.069 0.0195 34.6 8e-3 1.8461 1.7612 3.3389 3.575 3.1999 4.6601-0.0108 9.3236 0.0664 13.982 1e-3 1.7834-0.20387 3.052-2.0049 2.8262-3.752-0.0111-11.582 0.0222-23.167-0.0166-34.748-0.11345-1.8107-1.903-3.1922-3.6783-2.9885-4.5393 0.0196-9.0824-0.0392-13.619 0.0294-0.14527 0.0143-0.29055 0.0286-0.43582 0.0429z"
                            fill="#00f" strokeLinecap="round" strokeLinejoin="round" stroke="#00f"/>
                        <path
                            d="m787.82-345.28h57.512c0.62509-2.6522 1.3657-5.2821 1.9238-7.9473 0.081-1.388-0.50449-2.7119-0.70654-4.07-3.133-14.391-6.266-28.781-9.3989-43.172-5.3731-0.0198-10.75 0.0395-16.121-0.0296-1.8157-0.13886-3.1894-1.9056-3.0237-3.6927 0.0447-1.957 4e-3 -3.9281-0.52317-5.8276-1.9487-8.999-3.8973-17.998-5.846-26.997-0.77822 0.4281-1.6438 0.25019-2.4719 0.16992-1.4738 0.0154-3.2295 0.17939-4.284-1.0801-0.51728-0.49439-0.77669-1.202-0.89449-1.8945-5.3887-1.1523-10.777-2.3047-16.166-3.457v97.998zm25.193-93.969c0.0145-8e-3 6e-3 -0.0745 0 0z"
                            fill="#00f" strokeLinecap="round" strokeLinejoin="round" stroke="#00f"/>
                        <path
                            d="m789.98-338.42c-1.6966 0.31487-2.8244 2.0347-2.6524 3.7144 8e-3 22.851-0.0151 45.703 0.0113 68.553-0.0333 1.4735 1.5375 2.584 2.9261 2.1464 5.8623-1.3292 11.741-2.5953 17.593-3.9638 2.385-0.57747 4.2097-2.6978 4.5926-5.0992 1.834-8.8207 3.6238-17.652 5.4854-26.466 0.78879-3.4871 3.997-6.2546 7.5732-6.4646 2.9288-0.15956 5.8735 0.0706 8.8006-0.12312 1.9755-0.31918 3.4983-2.0428 3.7577-3.999 1.7897-8.6364 3.6432-17.263 5.3931-25.906 0.15192-1.4316-1.2387-2.661-2.6383-2.4646-16.735 7e-3 -33.471-0.013-50.206 0.01-0.21227 0.0208-0.42454 0.0417-0.6368 0.0625z"
                            fill="#00f" strokeLinecap="round" strokeLinejoin="round" stroke="#00f"/>
                        <path
                            d="m921.82-438.18c-0.0132 3.5411 0.0263 7.0875-0.0197 10.625 6e-3 0.6841-0.43224 1.1508-0.92178 1.5642-0.40191 0.58486-1.1745 0.59513-1.8144 0.60145v7.4844h21.652c-0.0482-7.8945-0.0964-15.789-0.14453-23.684-6.2506 1.1361-12.501 2.2721-18.752 3.4082z"
                            fill="#00f" strokeLinecap="round" strokeLinejoin="round" stroke="#00f"/>
                        <path
                            d="m524.46-119.07c-1.6508 0.3117-2.7723 1.9687-2.6193 3.6125 0.0424 3.2741-5e-3 6.5531 0.0937 9.8242 0.20449 1.8419 2.0544 3.1691 3.8635 2.9534 3.7405 0.0245 7.486 0.11911 11.224 0.0432 1.8634-0.23519 3.1362-2.164 2.9138-3.9763-0.0297-3.2192 0.0308-6.443-0.055-9.6594-0.18584-1.7875-1.9894-3.0782-3.7404-2.8699-3.78 0.0259-7.565-0.0519-11.342 0.0391-0.11275 0.0111-0.2255 0.0221-0.33825 0.0332z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternAscenseur)"/>
                        <path
                            d="m524.46-142.17c-1.6517 0.30819-2.7796 1.9678-2.6251 3.6125 0.0426 3.2747-6e-3 6.5544 0.094 9.8261 0.2073 1.8334 2.0489 3.1643 3.8533 2.9496 3.7502 0.022 7.5058 0.12367 11.253 0.0426 1.8561-0.24804 3.1194-2.173 2.8963-3.9816-0.0308-3.2231 0.0332-6.4509-0.0575-9.671-0.19973-1.7804-1.9931-3.06-3.7399-2.8524-3.778 0.0266-7.5613-0.0533-11.336 0.0401-0.11278 0.0114-0.22556 0.0227-0.33835 0.0341z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternAscenseur)"/>
                        <path
                            d="m864.01 3.418c-1.6551 0.31022-2.7953 1.963-2.6524 3.6145 7e-3 26.85-0.013 53.701 0.01 80.55-0.026 1.8429 1.665 3.4063 3.4926 3.3051 3.8744-0.0095 7.7523 0.06988 11.625 0.0055 1.7839-0.1995 3.0524-1.9996 2.8281-3.7461-4e-3 -26.904 8e-3 -53.809-6e-3 -80.713-0.0706-1.846-1.8733-3.3025-3.6891-3.0879-3.7566 0.025805-7.5182-0.051815-11.272 0.039172-0.1121 0.011031-0.2242 0.022062-0.33629 0.033093z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternEscaliersBtoT)"/>
                        <path
                            d="m851.78-143.55c-1.664 0.31019-2.8067 1.971-2.6669 3.6301 3e-3 5.906-0.0735 11.816-0.0211 17.719 0.051 1.7974 1.7805 3.2166 3.5442 3.0803 3.2876-0.0217 6.5792 0.0429 9.8645-0.0312 1.7924-0.19939 3.073-2.0073 2.8476-3.7637-0.0187-5.9376 0.0374-11.879-0.0278-17.814-0.167-1.8145-1.9977-3.1203-3.7672-2.893-3.1775 0.0319-6.3612-0.0643-9.5347 0.0488-0.0796 8e-3 -0.15914 0.0156-0.23872 0.0234z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternEscaliersBtoT)"/>
                        <path
                            d="m775.53-141.52c-2.7525 0.40684-4.9799 2.9403-4.9911 5.7291-0.0337 9.6149-0.0161 19.234-9e-3 28.849-0.0194 2.7725 2.1241 5.3591 4.8678 5.8068 2.268 0.23952 4.5642 0.0549 6.8438 0.11301 18.345-8e-3 36.69 0.0156 55.034-0.0117 3.0166-0.11825 5.6087-2.8594 5.5446-5.88-0.0398-9.6185-0.0493-19.239-0.11962-28.856-0.0143-2.789-2.2321-5.3254-4.9843-5.7427-2.7079-0.19061-5.4317-0.0386-8.1462-0.0873-17.743 0.0105-35.487-0.0211-53.228 0.0158-0.27078 0.0214-0.54156 0.0429-0.81234 0.0643z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternEscaliersLtoR)"/>
                        <path
                            d="m821.81-93.941c-1.6555 0.30967-2.7942 1.9654-2.6504 3.6164 0.034 2.8184-0.0685 5.6446 0.052 8.4582 0.23927 1.7251 1.9994 2.9189 3.6918 2.7187 5.9889-8e-3 11.979 0.03686 17.967-0.0043 1.8037-0.13981 3.1355-1.9429 2.9057-3.7066-0.0543-2.7788 0.0405-5.5658-0.11029-8.3394-0.21757-1.736-1.9506-2.9677-3.6579-2.8153-5.9196 0.01952-11.843-0.03905-17.76 0.0293l-0.43776 0.04296z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternEscaliersLtoR)"/>
                        <path
                            d="m605.58-165.4c-1.6552 0.30929-2.797 1.9626-2.6523 3.6144 0.026 3.3426-0.052 6.6903 0.0392 10.03 0.10226 1.8064 1.8873 3.153 3.6476 2.9886 37.177-5e-3 74.355 0.0104 111.53-8e-3 1.8138-0.0772 3.2387-1.8533 3.025-3.6359-0.0577-3.3859 0.01-6.7788-0.12749-10.16-0.17565-1.7704-1.9337-3.0626-3.6721-2.9011-37.052 7e-3 -74.106-0.0131-111.16 0.01-0.21162 0.0208-0.42324 0.0417-0.63486 0.0625z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternEscaliersLtoR)"/>
                        <path
                            d="m465.12-235.99c4.0278 0.12456 8.2501 0.1062 12.366 0.10393 9.7418-0.0221 19.483-0.14247 29.224-0.26994v-40.125h-17.359c-0.0131 7.3536 0.0262 14.712-0.0197 22.063 6e-3 0.68439-0.43252 1.1505-0.92303 1.5629-0.72373 0.89462-2.0202 0.51693-3.0229 0.60271-0.67456 0.0137-1.3248-0.21052-1.7178-0.7858-1.0174-0.68602-0.70632-2.0311-0.75796-3.0779v-44.441c-5.9297-0.0462-11.859-0.0924-17.789-0.13867v64.506z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternEscaliersBtoT)"/>
                        <path
                            d="m990.38-174.29c-1.6545 0.30871-2.7953 1.9637-2.6504 3.6144 0.0196 5.5179-0.0392 11.04 0.0294 16.555 0.053 1.8458 1.8593 3.266 3.6593 3.0923 22.442 0.0103 44.885 0.0471 67.327 0.0408 1.8522-0.0697 3.2901-1.8914 3.0723-3.7047-0.02-5.5927 0.039-11.189-0.029-16.779-0.1652-1.77-1.9259-3.0914-3.6677-2.891-22.368 7e-3 -44.737-0.013-67.104 0.01-0.21227 0.0208-0.42454 0.0417-0.6368 0.0625z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternEscaliersLtoR)"/>
                        <path
                            d="m946.88-276.59c-0.79677 0.32894-0.38251 1.3715-0.48633 2.0344-8e-3 7.2115 0.016 14.43-0.0107 21.637-0.2443 2.3873-2.8184 4.3318-5.1718 3.5522-2.1597-0.54436-3.5963-2.773-3.4113-4.9599-0.0174-7.2036 0.0347-14.412-0.026-21.612-0.19649-0.87353-1.3052-0.48786-1.9455-0.57318-4.7463 0.0171-9.497-0.0342-14.241 0.0256-0.87256 0.19998-0.48802 1.313-0.57314 1.9556 9e-3 12.669-0.0177 25.341 0.0133 38.008 0.0653 0.94926 1.2294 0.62906 1.8679 0.68214 12.397-9e-3 24.795 0.0177 37.191-0.0133 0.94556-0.0642 0.62785-1.2246 0.68018-1.8601-9e-3 -12.747 0.0171-25.496-0.0128-38.241-0.071-0.93771-1.2253-0.61946-1.8587-0.67231-4.0041 0.0248-8.0152-0.0496-12.015 0.0371z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternEscaliersBtoT)"/>
                        <path
                            d="m398.29-456.91c-1.4526 0.36277-1.7248 2.0399-2.3918 3.1602-0.88068 1.8898-1.9055 3.7192-2.6922 5.6484-0.2917 1.1528 0.64602 2.1346 1.6818 2.4561 6.2436 2.9144 12.465 5.8846 18.722 8.7642 1.1327 0.51743 2.4073-0.30182 2.7434-1.4266 1.1095-2.4528 2.3378-4.8599 3.3758-7.3402 0.313-1.1423-0.58605-2.1982-1.6451-2.5006-6.1947-2.8795-12.367-5.8145-18.576-8.6594-0.38665-0.16593-0.80942-0.17976-1.2187-0.10212z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternEscaliersLtoR)"/>
                        <path
                            d="m248.89-105.81h42.365v-15.406c-8.2364-0.0132-16.478 0.0264-24.711-0.0198-0.68512 5e-3 -1.1543-0.43197-1.5687-0.92301-0.8843-0.72685-0.51209-2.022-0.59691-3.0229-5e-3 -0.86285-0.0944-1.9296 0.72873-2.4694 0.41677-0.61386 1.1176-0.84484 1.8349-0.81301 9.4588 0.0133 18.92-0.0267 28.378 0.02 1.7153 0.0889 3.029 1.7558 2.8596 3.4386v23.899c6.0286-0.0221 12.057-0.0443 18.086-0.0664 1e-5 -14.152 1e-5 -28.303 0-42.455h-67.375c0 12.606 1e-5 25.212 0 37.818z"
                            stroke="#0ae" strokeLinecap="round" strokeLinejoin="round"
                            fill="url(#patternEscaliersLtoR)"/>
                        <path
                            d="m873.23-143.16c-1.1847 0.2448-1.682 1.5311-1.5312 2.6273-0.0153 7.2905 0.0306 14.583-0.0229 21.872-0.10475 2.9104-2.6187 5.4795-5.534 5.6119-4.1728 0.0916-8.3554-0.0189-12.529 0.0552-1.2538 0.01-2.0639 1.2993-1.8911 2.4675 0.0149 9.5757-0.0298 19.155 0.0223 28.728 0.0117 1.2296 1.2554 2.0341 2.406 1.9006 3.0149 0.06649 5.6565 2.7436 5.6858 5.7587 0.0234 22.856-0.0125 45.714 0.018 68.569-0.0329 1.2431 1.194 2.1505 2.3788 1.9905 16.725-0.00521 33.451 0.010416 50.177-0.00781 1.2311-0.061565 1.9772-1.3567 1.7636-2.498-0.53448-45.014-1.069-90.029-1.6034-135.04 0.042-1.2854-1.1971-2.2631-2.4367-2.0957-12.148 7e-3 -24.297-0.0148-36.444 0.0111-0.15308 0.0171-0.30615 0.0342-0.45922 0.0514z"
                            fill="#0ae" strokeLinecap="round" strokeLinejoin="round" stroke="#0ae"/>
                        <path
                            d="m933.3-471.38c-0.0326 1.8737 0.0656 3.7574-0.0496 5.6248-0.20879 1.4289-1.7142 2.285-3.0797 2.0822-5.396-0.0196-10.795 0.0392-16.189-0.0293-1.9668-0.19053-3.5809-2.1663-3.1518-4.1441-0.0925-0.37311 0.43091-1.3324-0.18315-1.2208-6.4991 0.0805-13.001 0.0122-19.501 0.0348-1.0549-0.15786-2.0201 0.40771-2.6517 1.2164-9.0205 9.0025-18.009 18.04-27.049 27.02-1.41 1.2345-3.3376 1.6438-5.1688 1.5075-6.3552 0.0449-12.723-0.26175-19.068 0.17749-3.2916 0.42668-6.5275 1.2049-9.7951 1.7815-1.5789 0.30266-3.1579 0.60532-4.7368 0.90798 1.9315 8.8134 3.8123 17.656 5.7754 26.451 1.2137 0.0157 2.446 8e-3 3.6563 4e-3 -0.42405-1.4771 0.01-3.3624 1.5463-3.9961 1.7579-0.69998 3.635 0.10658 5.4506-0.0742 1.5057 0.0836 3.056-0.19364 4.5285 0.19531 1.6194 0.50399 2.6904 2.0668 2.8579 3.7157 3.9434 18.358 7.9272 36.708 11.845 55.071 0.44579 2.6663-0.55179 5.2488-1.037 7.8331-3.9545 17.833-7.881 35.672-11.869 53.497-0.55851 1.8938-2.5823 3.0846-4.5125 2.8457-2.1947-0.0341-4.3972 0.0689-6.5871-0.0527-1.8955-0.2611-3.232-2.3476-2.629-4.1749 0.15346-0.64768 0.31842-1.2927 0.4552-1.9442-1.3962 0.0222-2.8284-0.0435-4.2031 0.0312-2.4919 11.757-4.939 23.525-7.4588 35.275-0.52529 1.8787-2.3314 3.156-4.2303 3.3423-18.86 3.9608-37.696 8.0422-56.573 11.916-3.0383 0.47723-6.1264 0.1875-9.1876 0.26723-16.291 7e-3 -32.582-0.013-48.872 0.01-1.5754 0.19423-2.6107 1.5368-3.8697 2.3598-7.4809 5.7068-14.931 11.456-22.431 17.136-1.5594 1.0276-3.4649 1.3369-5.3008 1.1675-3.1334-0.054-6.1745-0.88069-9.1353-1.8414-12.771-3.5528-25.732-6.5418-38.174-11.198-12.525-4.3529-25.082-8.614-37.603-12.975-1.7018-0.7264-2.9338-2.3236-3.3077-4.125-0.37393-1.0315-0.54849-2.1881-1.1573-3.106-0.9564-0.82582-2.3202-0.82303-3.467-1.2426-2.268-0.59895-4.5244-1.2642-6.7996-1.8221-0.68727 0.0609-0.84316 0.94403-1.3262 1.334-0.97872 1.3118-2.8081 2.1682-4.3763 1.3904-1.4189-0.66812-2.3954-1.9708-3.7641-2.7279-8.2703-5.6956-16.573-11.348-24.823-17.071-1.5416-1.2225-1.647-3.7085-0.30445-5.1209 1.6799-2.1895 3.268-4.4561 5.0051-6.5978 1.3274-1.3389 3.6226-1.3464 5.0336-0.12927 1.3179 0.89589 2.6358 1.7918 3.9537 2.6877 1.7109-4 3.4219-8 5.1328-12-6.1104-2.6441-12.25-5.2263-18.342-7.909-1.6962-0.90887-2.5441-2.9117-2.3374-4.782 5e-3 -28.277-0.0104-56.554 8e-3 -84.83 0.0881-1.9595 1.5943-3.6398 3.4499-4.165 5.8963-2.4007 11.793-4.8015 17.689-7.2022-1.7194-3.2858-3.4388-6.5716-5.1582-9.8574-2.8495 1.3773-5.8393 2.9536-9.1099 2.6797-4.0581-0.20207-8.125-0.0509-12.187-0.0977-16.118 4e-3 -32.237-8e-3 -48.355 6e-3 -0.6752 0.25422-0.66092 1.1646-1.0162 1.7062-0.74067 1.7229-1.4814 3.4459-2.222 5.1688 8.7828 4.2117 17.585 8.3858 26.356 12.621 1.6883 0.94625 2.5352 2.9599 2.3318 4.8454-5e-3 24.541 0.0104 49.083-8e-3 73.623-0.0892 1.9588-1.522 3.6423-3.3226 4.3146-3.5622 1.7981-7.157 3.5445-10.699 5.3748-0.52427 0.61073-0.14806 1.5097-0.26172 2.241v20.626c6.8998 0.0188 13.803-0.0377 20.701 0.0282 1.9639 0.17213 3.4072 2.1368 3.1723 4.0597-0.0104 17.265 0.0208 34.532-0.0156 51.797-0.12232 1.9596-2.0389 3.4832-3.9703 3.2734-17.315-0.0107-34.632 0.0215-51.946-0.0161-1.9597-0.0744-3.5386-1.9335-3.3866-3.8718v-49.866h-8.7227c0.20801 1.5974 0.11541 3.5901-1.4121 4.5332-1.477 0.89726-3.2068 0.47726-4.8059 0.81742-5.1285 0.65656-10.257 1.3131-15.385 1.9697v48.826c3.8132 0.0191 7.6298-0.038 11.441 0.0282 1.9639 0.17143 3.4115 2.1357 3.1742 4.0597-0.0104 19.593 0.0208 39.187-0.0156 58.779-0.12053 1.9606-2.0413 3.483-3.9723 3.2734h-10.465v6.1289c39.749 7e-3 79.499-0.0134 119.25 0.01 1.9964 0.0692 3.5834 2.0132 3.365 3.9779-0.0104 17.136 0.0208 34.273-0.0156 51.409-0.12053 1.9606-2.0412 3.483-3.9723 3.2734h-244.16v12.299h275.47c0.79045-0.13512 0.80434-1.1688 1.1935-1.7241 3.9703-8.5297 7.891-17.084 11.892-25.599 0.95685-1.6881 3.2657-2.2961 4.9697-1.4083 31.267 11.861 62.544 23.699 93.806 35.575 1.8222 0.78642 2.5978 3.163 1.6898 4.9063-0.93965 2.3396-1.7581 4.7342-2.7733 7.0395-0.7762 1.3945-2.5897 1.9295-4.063 1.4409-0.46005 2.389-1.1519 4.7215-1.8309 7.0561-0.0101 0.49474-0.66014 1.3704-0.25514 1.6181 29.994 6.6632 59.995 13.296 89.984 19.978 1.8981 0.52312 3.0176 2.7188 2.4216 4.5774-0.54036 2.4685-0.95228 4.971-1.5723 7.4184-0.47601 1.3494-1.9487 2.1387-3.3395 2.0042-0.13717 0.89464-0.17078 1.67-0.2793 2.627-0.24547 1.9596-0.56265 3.9096-0.83789 5.8652 23.112 0.00668 46.225-0.01336 69.336 0.010017 1.9964 0.069171 3.5834 2.0132 3.365 3.9779v4.6195h9.7812v-70.068c-11.688-0.01073-23.378 0.02146-35.065-0.0161-1.9597-0.07442-3.5386-1.9335-3.3866-3.8718v-17.358c-18.814-0.01073-37.63 0.02147-56.443-0.0161-1.9597-0.07442-3.5386-1.9335-3.3866-3.8718 0.068-1.6553-0.1474-3.3385 0.1304-4.9748 0.4114-1.7865 2.2842-2.8918 4.0555-2.6959h6.6051v-11.754c-2.5777-0.0274-5.1615 0.0548-7.7355-0.0411-1.9167-0.17547-3.349-2.0577-3.1747-3.9448 0.0131-9.3137-0.0262-18.629 0.0196-27.942 0.14922-1.9782 2.1206-3.4747 4.0644-3.2333 35.991-0.0551 71.982-0.11017 107.97-0.16525 0.0107-9.5031-0.0215-19.008 0.0161-28.51 0.074-1.9611 1.9337-3.5367 3.8718-3.3885h45.388c5e-3 -33.183-0.0107-66.367 8e-3 -99.549 0.0262-1.9986 1.9029-3.6426 3.8798-3.4882 9.422 9e-3 18.845-0.0182 28.266 0.0137 1.2271 0.0729 2.203 0.98257 2.7539 2.0234 1.4344-0.0909 2.9912-0.20802 4.3516-0.10352 2.7275 0.0359 5.4558 6e-3 8.1836 0.0156v-15.422c-14.604-7e-3 -29.209 0.013-43.812-0.01-2.0215-0.0926-3.582-2.0986-3.3281-4.0781 7e-3 -22.067-0.013-44.135 0.01-66.201 0.0962-1.9755 2.023-3.5509 3.9762-3.3301h22.344v-15.385c-8.1657-0.0169-16.334 0.0338-24.498-0.0254-1.956-0.13559-3.4554-2.0361-3.2715-3.9625 7e-3 -17.758-0.013-35.516 0.01-53.274 0.12067-1.9948 1.8904-3.596 3.849-3.7307 8.0752-1.5985 16.181-3.1581 24.237-4.781v-19.543c-2.043 0.75195-4.0859 1.5039-6.1289 2.2559zm-211.46 298.7c3.4285-0.0492 6.6175 2.6496 7.1303 6.0407 0.22953 2.1628 0.0481 4.3503 0.10599 6.523-0.013 11.034 0.0261 22.07-0.0195 33.102-0.0869 3.1538-2.4521 6.0602-5.5292 6.769-2.082 0.42624-4.2308 0.14649-6.3422 0.22719-25.703-7e-3 -51.406 0.013-77.109-0.01-3.1162-0.0558-6.0416-2.3158-6.8124-5.3457-0.50942-1.9659-0.19915-4.0271-0.2852-6.0356-0.0428-2.5745 0.0889-5.1576-0.0723-7.7262-0.30788-1.6571-1.9617-2.7995-3.6144-2.6562-8.8405-0.013-17.683 0.0261-26.522-0.0195-3.1562-0.0829-6.0654-2.4453-6.7853-5.5206-0.43268-2.0474-0.16564-4.1647-0.25454-6.243 8e-3 -3.8778-0.085-7.7593-0.0146-11.635 0.13655-3.4055 2.9997-6.4357 6.3917-6.7622 2.6704-0.17478 5.356-0.0567 8.0325-0.11416 37.234-0.19805 74.467-0.397 111.7-0.59447z"
                            fill="#0ae" strokeLinecap="round" strokeLinejoin="round" stroke="#0ae"/>
                        <path
                            d="m923.66-227.69c-1.1335 0.23325-1.6686 1.4471-1.5254 2.5137 0.0148 5.6713-0.0296 11.346 0.0222 17.015 8e-3 1.2549 1.2996 2.0637 2.4677 1.8911 6.1326 0.0171 12.268-0.0341 18.399 0.0254 2.983 0.21243 5.4837 2.9529 5.4199 5.9434-0.0154 7.1518 0.0307 14.307-0.0229 21.457-0.087 2.0232-1.2979 3.9452-3.0841 4.8986-1.835 1.0747-4.0356 0.6658-6.0618 0.74613-20.965 7e-3 -41.932-0.0148-62.895 0.0111-1.2431-0.0329-2.1505 1.194-1.9905 2.3788 0.0148 5.6299-0.0295 11.263 0.0222 16.891 8e-3 1.2549 1.2996 2.0637 2.4677 1.8911 32.901-7e-3 65.803 0.0148 98.703-0.0111 1.2394 0.0325 2.1522-1.1891 1.9905-2.3729-4e-3 -17.617 8e-3 -35.234-6e-3 -52.85-0.0503-1.2336-1.3285-2.0255-2.4844-1.8281-4.1411-0.0233-8.2873 0.0463-12.425-0.0341-2.0218-0.10535-3.9082-1.3626-4.8462-3.1475-1.0268-1.8614-0.61463-4.0536-0.69922-6.0871-0.0351-2.5719 0.0703-5.154-0.0527-7.7195-0.22712-1.1557-1.4779-1.7153-2.5629-1.5455-10.13-0.0346-20.261-0.0998-30.39-0.11535-0.14851 0.0165-0.29702 0.033-0.44554 0.0495z"
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

export default DSEG_RDC