<template>
  <div>
    <script
      async
      defer
      crossorigin="anonymous"
      src="https://connect.facebook.net/en_US/sdk.js"
    ></script>
    <!-- mobile left panel -->
    <mobile-left-panel v-if="mobileLeftPanel" />
    <div v-if="navBack" class="nav-back-mobile" @click="sendGetBackEvent()">
      <svg
        width="14"
        height="24"
        viewBox="0 0 14 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="arrow-back"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.4142 20.5858C14.1953 21.3668 14.1953 22.6332 13.4142 23.4142C12.6332 24.1953 11.3668 24.1953 10.5858 23.4142L0.585786 13.4142C-0.195262 12.6332 -0.195262 11.3668 0.585786 10.5858L10.5858 0.585786C11.3668 -0.195262 12.6332 -0.195262 13.4142 0.585786C14.1953 1.36684 14.1953 2.63317 13.4142 3.41421L4.82843 12L13.4142 20.5858Z"
          fill="#1A1A1A"
        />
      </svg>
      <p>BACK TO HOMEPAGE</p>
    </div>
    <header
      v-show="navBarShow"
      id="navbar"
      class="site-header clearfix navbar-c"
      role="banner"
    >
      <div class="container">
        <a
          class="home-link"
          href="https://atlantamealprep.com/"
          title="Atlanta Meal Prep"
          rel="home"
        >
          <h2 class="site-title">
            <nuxt-link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 304.44 44.84"
                class="logo-svg"
              >
                <title>Atlanta Meal Prep</title>
                <path
                  d="M117.45,20.06a2.12,2.12,0,0,0-2.12,2.12v2.94a2.05,2.05,0,0,1-4.1,0v-10a2.12,2.12,0,0,0-4.15-.59,9.22,9.22,0,0,0-14.32,7.7v2.94a2.05,2.05,0,1,1-4.1,0v-23a2.12,2.12,0,1,0-4.24,0V5.88H78.18a2.12,2.12,0,1,0,0,4.24h6.23v15a2.05,2.05,0,0,1-4.11,0V22.18A9.22,9.22,0,0,0,66,14.48a2.12,2.12,0,0,0-4.15.59v10a2.05,2.05,0,1,1-4.1,0v-10a2.12,2.12,0,0,0-4.15-.59,9.22,9.22,0,0,0-14.32,7.7v2.94a2.05,2.05,0,1,1-4.1,0v-23a2.12,2.12,0,1,0-4.24,0v23a2.05,2.05,0,1,1-4.1,0v-23a2.12,2.12,0,1,0-4.24,0V5.88H16.34a2.12,2.12,0,0,0,0,4.24h6.23v15a2.05,2.05,0,1,1-4.1,0v-10a2.12,2.12,0,0,0-4.15-.59,9.24,9.24,0,1,0,1.2,14.45,6.27,6.27,0,0,0,9.18.89,6.26,6.26,0,0,0,8.35,0,6.27,6.27,0,0,0,9.18-.89,9.18,9.18,0,0,0,12.57,0,6.25,6.25,0,0,0,7.69,1.88,2.12,2.12,0,0,0,3.61-1.51V22.18a5,5,0,0,1,10,0v2.94a6.29,6.29,0,0,0,10.47,4.7,6.27,6.27,0,0,0,9.18-.89,9.18,9.18,0,0,0,12.57,0,6.29,6.29,0,0,0,11.3-3.81V22.18A2.12,2.12,0,0,0,117.45,20.06Zm-9.49-5a1.14,1.14,0,1,1,2.28,0v3A9.28,9.28,0,0,0,108,15.15Zm.49,12.24a5.27,5.27,0,0,1-.49-2.19V16.5a8.21,8.21,0,0,1,.49,10.81ZM102,13.93a8.2,8.2,0,0,1,5,1.7v3.29a6,6,0,0,0-11,3.27v2.94a5.27,5.27,0,0,1-.49,2.19A8.24,8.24,0,0,1,102,13.93Zm0,13.24a5,5,0,1,1,5-5A5,5,0,0,1,102,27.17Zm-16.6-25a1.14,1.14,0,0,1,2.28,0V6.22a2.11,2.11,0,0,0-1.14-.34H85.39ZM87.67,8a1.14,1.14,0,0,1-1.14,1.14H85.39V6.86h1.14A1.14,1.14,0,0,1,87.67,8ZM78.18,9.14a1.14,1.14,0,1,1,0-2.28h6.23V9.14Zm7.21,1h1.14a2.11,2.11,0,0,0,1.14-.34V25.12a5.26,5.26,0,0,1-1.14,3.25,5.26,5.26,0,0,1-1.14-3.25Zm-22.57,5a1.14,1.14,0,1,1,2.28,0v.08a9.28,9.28,0,0,0-2.28,2.92Zm-8.35,0a1.14,1.14,0,1,1,2.28,0v3a9.28,9.28,0,0,0-2.28-2.92ZM55,27.31a5.27,5.27,0,0,1-.49-2.19V16.5A8.21,8.21,0,0,1,55,27.31ZM48.5,13.93a8.2,8.2,0,0,1,5,1.69v3.29a6,6,0,0,0-11,3.27v2.94A5.27,5.27,0,0,1,42,27.31,8.24,8.24,0,0,1,48.5,13.93Zm0,13.24a5,5,0,1,1,5-5A5,5,0,0,1,48.5,27.17Zm-16.6-25a1.14,1.14,0,0,1,2.28,0v23A5.26,5.26,0,0,1,33,28.37a5.26,5.26,0,0,1-1.14-3.25Zm-8.35,0a1.14,1.14,0,0,1,2.28,0V6.22a2.1,2.1,0,0,0-1.14-.34H23.55ZM25.83,8a1.14,1.14,0,0,1-1.14,1.14H23.55V6.86h1.14A1.14,1.14,0,0,1,25.83,8ZM16.34,9.14a1.14,1.14,0,0,1,0-2.28h6.23V9.14Zm7.21,1h1.14a2.1,2.1,0,0,0,1.14-.34V25.12a5.26,5.26,0,0,1-1.14,3.25,5.26,5.26,0,0,1-1.14-3.25Zm-8.35,5a1.14,1.14,0,1,1,2.28,0v3a9.28,9.28,0,0,0-2.28-2.92Zm.49,12.24a5.27,5.27,0,0,1-.49-2.19V16.5a8.21,8.21,0,0,1,.49,10.81ZM9.23,30.44a8.25,8.25,0,1,1,5-14.81v3.29a6,6,0,1,0,0,6.51A6.25,6.25,0,0,0,15,28.1,8.22,8.22,0,0,1,9.23,30.44Zm0-3.26a5,5,0,1,1,5-5A5,5,0,0,1,9.23,27.17Zm7,1A9.25,9.25,0,0,0,17.63,26a3,3,0,0,0,5.23,1A6.29,6.29,0,0,0,24,29.11a5.25,5.25,0,0,1-7.79-.9Zm9.18.9A6.29,6.29,0,0,0,26.52,27a3,3,0,0,0,4.69,0,6.29,6.29,0,0,0,1.13,2.09,5.22,5.22,0,0,1-7,0Zm11.83,1.33a5.27,5.27,0,0,1-3.48-1.33A6.29,6.29,0,0,0,34.87,27a3,3,0,0,0,5.23-1,9.25,9.25,0,0,0,1.42,2.21A5.3,5.3,0,0,1,37.21,30.44Zm11.29,0a8.22,8.22,0,0,1-5.74-2.34,6.25,6.25,0,0,0,.74-2.68,6,6,0,0,0,10,0,6.25,6.25,0,0,0,.74,2.68A8.22,8.22,0,0,1,48.5,30.44Zm7-2.23A9.25,9.25,0,0,0,56.9,26a3,3,0,0,0,4.94,1.34v2A2.1,2.1,0,0,0,62,30a5.26,5.26,0,0,1-6.48-1.75Zm9.62,1.08A1.14,1.14,0,0,1,64,30.44a1.11,1.11,0,0,1-.56-.17,6.34,6.34,0,0,0,1.7-1.79Zm-2.25.16a1.07,1.07,0,0,1,0-.16V22.18A8.22,8.22,0,0,1,65.1,16.5v8.62A5.31,5.31,0,0,1,62.85,29.45ZM77,25.12V22.18a6,6,0,0,0-11-3.27V15.62a8.24,8.24,0,0,1,13.24,6.56v2.94A3,3,0,0,0,84.7,27a6.29,6.29,0,0,0,1.13,2.09,5.29,5.29,0,0,1-8.8-4ZM90.7,30.44a5.27,5.27,0,0,1-3.48-1.33A6.29,6.29,0,0,0,88.36,27a3,3,0,0,0,5.23-1A9.25,9.25,0,0,0,95,28.21,5.3,5.3,0,0,1,90.7,30.44Zm11.29,0a8.22,8.22,0,0,1-5.74-2.34A6.25,6.25,0,0,0,97,25.42a6,6,0,0,0,10,0,6.25,6.25,0,0,0,.74,2.68A8.22,8.22,0,0,1,102,30.44Zm16.6-5.32A5.3,5.3,0,0,1,109,28.21,9.25,9.25,0,0,0,110.39,26a3,3,0,0,0,5.92-.88V22.18a1.14,1.14,0,0,1,2.28,0Z"
                  fill="#293f94"
                />
                <path
                  d="M302.51,16.22a9.36,9.36,0,0,0-7.44-3.68,9.32,9.32,0,0,0-5.21,1.59,2.12,2.12,0,0,0-4.17.54V42.72a2.12,2.12,0,1,0,4.24,0v-13a9.37,9.37,0,0,0,12.58-13.54Zm-7.44,10.83a5.13,5.13,0,1,1,0-10.26,5.07,5.07,0,0,1,2.38.58,5.19,5.19,0,0,1,1.7,1.43,5.08,5.08,0,0,1,1.06,3.12A5.14,5.14,0,0,1,295.07,27.05Z"
                  fill="#293f94"
                />
                <path
                  d="M274.25,12.54a9.39,9.39,0,0,0-9.38,9.38v3.4a1.74,1.74,0,1,1-3.47,0V20.56a5,5,0,0,0-4.94-5h-4.6v-.87a5.12,5.12,0,1,0-5.11,5.11h.87v3.41a3.87,3.87,0,1,1-7.73,0V21.92a9.29,9.29,0,0,0-1.93-5.7,9.36,9.36,0,0,0-7.44-3.68,9.32,9.32,0,0,0-5.21,1.59,2.12,2.12,0,0,0-4.17.54V42.72a2.12,2.12,0,1,0,4.24,0v-13a9.33,9.33,0,0,0,12-1.52,8.1,8.1,0,0,0,14.44-5V19.78h4.52a.78.78,0,0,1,.77.78v5h0A6,6,0,0,0,268,28.85a9.33,9.33,0,0,0,6.3,2.45,2.12,2.12,0,0,0,0-4.24,5.14,5.14,0,0,1-4.67-3H281.5a2.12,2.12,0,0,0,2.12-2.12A9.39,9.39,0,0,0,274.25,12.54ZM230.52,27.05a5.13,5.13,0,1,1,0-10.26,5.07,5.07,0,0,1,2.38.58,5.19,5.19,0,0,1,1.7,1.43,5.09,5.09,0,0,1,1.06,3.12A5.14,5.14,0,0,1,230.52,27.05Zm17.11-11.51h-.87a.87.87,0,1,1,.87-.87Zm22,4.26a5.12,5.12,0,0,1,9.34,0Z"
                  fill="#293f94"
                />
                <path
                  d="M167.17,12.67A9.39,9.39,0,0,0,157.79,22v3.4a1.74,1.74,0,1,1-3.47,0V19.29A7.69,7.69,0,0,0,141,14a7.66,7.66,0,0,0-9.36-1.41,2.12,2.12,0,0,0-3.92,1.12V29.29a2.12,2.12,0,1,0,4.24,0v-10a3.46,3.46,0,0,1,6.91,0v10a2.12,2.12,0,1,0,4.24,0v-10a3.46,3.46,0,1,1,6.91,0v6.65h0a6,6,0,0,0,10.77,3,9.33,9.33,0,0,0,6.3,2.45,2.12,2.12,0,0,0,0-4.24,5.14,5.14,0,0,1-4.67-3h11.92A2.12,2.12,0,0,0,176.54,22,9.39,9.39,0,0,0,167.17,12.67Zm-4.67,7.25a5.12,5.12,0,0,1,9.34,0Z"
                  fill="#293f94"
                />
                <path
                  d="M210.83,19.92A2.12,2.12,0,0,0,208.71,22v3.4a1.74,1.74,0,1,1-3.47,0V23.12h0v-21a2.12,2.12,0,1,0-4.24,0V22h0v3.4a1.74,1.74,0,1,1-3.47,0V14.79a2.12,2.12,0,0,0-4.17-.54,9.27,9.27,0,0,0-.86-.51A9.38,9.38,0,1,0,194.45,29a6,6,0,0,0,8.67,1A6,6,0,0,0,213,25.44V22A2.12,2.12,0,0,0,210.83,19.92Zm-22.68,7.25a5.13,5.13,0,0,1,0-10.27,5.07,5.07,0,0,1,2.38.58,5.2,5.2,0,0,1,1.7,1.43A5.08,5.08,0,0,1,193.28,22,5.14,5.14,0,0,1,188.15,27.17Z"
                  fill="#293f94"
                />
              </svg>
            </nuxt-link>
            <span>Atlanta Meal Prep</span>
          </h2>
        </a>
        <a v-if="this.$store.state.logedIn === true">
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="logout-icon"
            @click="logOut()"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.506598 4.15184L8.575 0.130779C9.15745 -0.231689 9.9178 0.200168 9.9178 0.923838V2.13164H15.9196C16.4101 2.13164 16.8073 2.54512 16.8073 3.05492V6.90267C16.8073 8.11713 15.0319 8.11713 15.0319 6.90267V3.97821H9.9178V17.9294H15.0319V15.005C15.0319 13.7908 16.8073 13.7908 16.8073 15.005V18.8527C16.8073 19.3628 16.4101 19.776 15.9196 19.776H9.9178L9.91445 20.9841C9.91506 21.6517 9.24031 22.108 8.64872 21.8136L0.580318 17.7926C0.241571 17.6623 0 17.3233 0 16.9263L0.00365555 4.98165C0.00396018 4.63851 0.189479 4.30962 0.506598 4.15184ZM12.6098 9.78404C11.1324 9.78404 11.1324 12.1208 12.6098 12.1208H19.1657L17.8933 13.4439C16.849 14.53 18.4371 16.1821 19.4816 15.0959L22.6647 11.7849C23.0936 11.3388 23.1296 10.6034 22.6647 10.1199L19.4816 6.80888C18.4371 5.72274 16.849 7.37476 17.8933 8.4609L19.1657 9.78404H12.6098Z"
              fill="#3C3C3C"
            />
          </svg>
        </a>
        <nuxt-link to="/cart">
          <svg
            class="cart-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="40"
            viewBox="0 0 48 40"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 32C0 36.4183 3.58172 40 8 40H40C44.4183 40 48 36.4183 48 32V8C48 3.58172 44.4183 0 40 0H8C3.58172 0 0 3.58172 0 8V32Z"
              fill="#34BC89"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.0038 13.1387C15.0437 12.7471 15.4424 12.4338 15.8412 12.5121L18.8318 12.9429C19.1508 12.982 19.39 13.217 19.4697 13.5303L19.9482 15.5667H31.0457C31.2052 15.5667 31.3249 15.645 31.4046 15.7625C31.4844 15.88 31.5242 16.0758 31.4844 16.1933L30.2881 20.96C30.2084 21.1558 30.009 21.3125 29.8096 21.3125L21.6628 22.3698L21.7825 22.8789H29.8894C30.2881 22.8789 30.647 23.2314 30.647 23.623C30.647 24.0146 30.328 24.3671 29.8894 24.3671H21.1445C20.7856 24.3671 20.4666 24.1321 20.3869 23.7797L18.0741 14.3135L15.6019 13.9611C15.243 13.9219 14.9639 13.5303 15.0038 13.1387ZM27.8557 27.5C27.151 27.5 26.5797 26.9389 26.5797 26.2468C26.5797 25.5547 27.151 24.9937 27.8557 24.9937C28.5604 24.9937 29.1317 25.5547 29.1317 26.2468C29.1317 26.9389 28.5604 27.5 27.8557 27.5ZM21.5032 26.2468C21.5032 26.9389 22.0745 27.5 22.7792 27.5C23.4839 27.5 24.0552 26.9389 24.0552 26.2468C24.0552 25.5547 23.4839 24.9937 22.7792 24.9937C22.0745 24.9937 21.5032 25.5547 21.5032 26.2468Z"
              fill="black"
            />
            <mask
              id="mask3"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="15"
              y="12"
              width="17"
              height="16"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.0038 13.1387C15.0437 12.7471 15.4424 12.4338 15.8412 12.5121L18.8318 12.9429C19.1508 12.982 19.39 13.217 19.4697 13.5303L19.9482 15.5667H31.0457C31.2052 15.5667 31.3249 15.645 31.4046 15.7625C31.4844 15.88 31.5242 16.0758 31.4844 16.1933L30.2881 20.96C30.2084 21.1558 30.009 21.3125 29.8096 21.3125L21.6628 22.3698L21.7825 22.8789H29.8894C30.2881 22.8789 30.647 23.2314 30.647 23.623C30.647 24.0146 30.328 24.3671 29.8894 24.3671H21.1445C20.7856 24.3671 20.4666 24.1321 20.3869 23.7797L18.0741 14.3135L15.6019 13.9611C15.243 13.9219 14.9639 13.5303 15.0038 13.1387ZM27.8557 27.5C27.151 27.5 26.5797 26.9389 26.5797 26.2468C26.5797 25.5547 27.151 24.9937 27.8557 24.9937C28.5604 24.9937 29.1317 25.5547 29.1317 26.2468C29.1317 26.9389 28.5604 27.5 27.8557 27.5ZM21.5032 26.2468C21.5032 26.9389 22.0745 27.5 22.7792 27.5C23.4839 27.5 24.0552 26.9389 24.0552 26.2468C24.0552 25.5547 23.4839 24.9937 22.7792 24.9937C22.0745 24.9937 21.5032 25.5547 21.5032 26.2468Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask3)">
              <rect x="12" y="8" width="24" height="24" fill="white" />
            </g>
          </svg>
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mobile-cart-icon"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.00506592 0.851555C0.0582314 0.329402 0.589893 -0.0883211 1.12155 0.0161096L5.10901 0.590478C5.53434 0.642694 5.85333 0.955986 5.95967 1.37371L6.59766 4.08891H21.3943C21.607 4.08891 21.7665 4.19334 21.8728 4.34998C21.9791 4.50663 22.0323 4.76771 21.9791 4.92435L20.3842 11.28C20.2778 11.5411 20.012 11.75 19.7462 11.75L8.8838 13.1598L9.0433 13.8386H19.8525C20.3842 13.8386 20.8627 14.3085 20.8627 14.8307C20.8627 15.3528 20.4373 15.8228 19.8525 15.8228H8.19264C7.71415 15.8228 7.28882 15.5095 7.18249 15.0395L4.09885 2.41802L0.802557 1.94808C0.324062 1.89586 -0.0480995 1.37371 0.00506592 0.851555ZM17.141 20C16.2014 20 15.4397 19.2519 15.4397 18.3291C15.4397 17.4063 16.2014 16.6582 17.141 16.6582C18.0806 16.6582 18.8423 17.4063 18.8423 18.3291C18.8423 19.2519 18.0806 20 17.141 20ZM8.67114 18.3291C8.67114 19.2519 9.43284 20 10.3724 20C11.3121 20 12.0738 19.2519 12.0738 18.3291C12.0738 17.4063 11.3121 16.6582 10.3724 16.6582C9.43284 16.6582 8.67114 17.4063 8.67114 18.3291Z"
              fill="#3C3C3C"
            />
          </svg>
        </nuxt-link>
        <div class="hamburger-icon" @click="toggleHamburger()">
          <div class="hamburger-part"></div>
          <div class="hamburger-part"></div>
          <div class="hamburger-part"></div>
        </div>
        <div class="navbar">
          <nav
            id="site-navigation"
            class="navigation main-navigation"
            role="navigation"
          >
            <a
              class="screen-reader-text skip-link"
              href="#content"
              title="Skip to content"
              >Skip to content</a
            >
            <div class="menu-primary-container">
              <ul id="menu-primary" class="nav-menu">
                <li
                  id="menu-item-21"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-21"
                >
                  <nuxt-link to="/about">Order</nuxt-link>
                  <ul class="sub-menu">
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page"
                    >
                      <nuxt-link to="/about">Menu</nuxt-link>
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page"
                    >
                      <nuxt-link to="/gallery">Custom menu</nuxt-link>
                    </li>
                  </ul>
                </li>
                <li
                  v-if="this.$store.state.logedIn === true"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-21"
                >
                  <nuxt-link to>History</nuxt-link>
                </li>
                <li
                  v-if="this.$store.state.logedIn === true"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-21"
                >
                  <nuxt-link to>Profile</nuxt-link>
                </li>
                <li
                  id="menu-item-21"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-21"
                >
                  <nuxt-link to>About</nuxt-link>
                  <ul class="sub-menu">
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page"
                    >
                      <nuxt-link to="/contact">Contact & Policy</nuxt-link>
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page"
                    >
                      <nuxt-link to="/gallery">Gallery</nuxt-link>
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page"
                    >
                      <nuxt-link to="/delivery-and-pickup"
                        >Delivery & Pickup</nuxt-link
                      >
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page"
                    >
                      <nuxt-link to="/references"
                        >Partners & References</nuxt-link
                      >
                    </li>
                  </ul>
                </li>
                <li
                  v-if="this.$store.state.logedIn === true"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-21"
                >
                  <nuxt-link to>Settings</nuxt-link>
                </li>
                <li
                  id="menu-item-21"
                  :class="{
                    'menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-21': true,
                    'border-right': this.$store.state.logedIn === true,
                  }"
                >
                  <nuxt-link to>Rewards & Referrals</nuxt-link>
                  <ul class="sub-menu">
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page"
                    >
                      <nuxt-link to="/rewards">Rewards</nuxt-link>
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page"
                    >
                      <nuxt-link to="/referrals">Referrals</nuxt-link>
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page"
                    >
                      <nuxt-link to="/gift-certificate"
                        >Gift certificate</nuxt-link
                      >
                    </li>
                  </ul>
                </li>
                <li v-if="this.$store.state.logedIn === false">
                  <nuxt-link
                    class="menu-item menu-item-type-post_type menu-item-object-page nav-green-no-hover"
                    to="/register"
                    >Login</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <Nuxt />
    <newsletter />
    <footer id="colophon" class="site-footer" role="contentinfo">
      <div class="container row">
        <div class="col-md-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136.3 131.61">
            <title>Atlanta Meal Prep</title>
            <path
              d="M133.88,22.86a2.42,2.42,0,0,0-2.42,2.42v3.35a2.34,2.34,0,1,1-4.68,0V17.18a2.41,2.41,0,0,0-4.73-.67,10.51,10.51,0,0,0-16.32,8.78v3.35a2.34,2.34,0,1,1-4.68,0V2.42a2.42,2.42,0,1,0-4.84,0V6.7h-7.1a2.42,2.42,0,1,0,0,4.84h7.1v17.1a2.34,2.34,0,0,1-4.68,0V25.28a10.51,10.51,0,0,0-16.32-8.78,2.41,2.41,0,0,0-4.73.67V28.63a2.34,2.34,0,1,1-4.68,0V17.18a2.41,2.41,0,0,0-4.73-.67,10.51,10.51,0,0,0-16.32,8.78v3.35a2.34,2.34,0,1,1-4.68,0V2.42a2.42,2.42,0,1,0-4.84,0V28.63a2.34,2.34,0,1,1-4.68,0V2.42a2.42,2.42,0,1,0-4.84,0V6.7h-7.1a2.42,2.42,0,0,0,0,4.84h7.1v17.1a2.34,2.34,0,1,1-4.68,0V17.18a2.41,2.41,0,0,0-4.73-.67A10.53,10.53,0,1,0,17.69,33a7.14,7.14,0,0,0,10.46,1,7.13,7.13,0,0,0,9.52,0,7.14,7.14,0,0,0,10.46-1,10.46,10.46,0,0,0,14.33,0,7.13,7.13,0,0,0,8.76,2.14,2.42,2.42,0,0,0,4.11-1.72V25.28a5.69,5.69,0,0,1,11.38,0v3.35A7.16,7.16,0,0,0,98.63,34a7.14,7.14,0,0,0,10.46-1,10.46,10.46,0,0,0,14.33,0,7.17,7.17,0,0,0,12.88-4.34V25.28A2.42,2.42,0,0,0,133.88,22.86Zm-10.82-5.69a1.3,1.3,0,1,1,2.6,0v3.42a10.58,10.58,0,0,0-2.6-3.33Zm.55,14a6,6,0,0,1-.55-2.51V18.8a9.36,9.36,0,0,1,.55,12.33Zm-7.35-15.26a9.35,9.35,0,0,1,5.69,1.93v3.75a6.8,6.8,0,0,0-12.49,3.72v3.35a6,6,0,0,1-.55,2.51,9.4,9.4,0,0,1,7.35-15.26Zm0,15.1a5.69,5.69,0,1,1,5.69-5.69A5.69,5.69,0,0,1,116.26,31ZM97.33,2.42a1.3,1.3,0,0,1,2.6,0V7.08a2.4,2.4,0,0,0-1.3-.39h-1.3Zm2.6,6.7a1.3,1.3,0,0,1-1.3,1.3h-1.3V7.81h1.3A1.3,1.3,0,0,1,99.94,9.12Zm-10.82,1.3a1.3,1.3,0,1,1,0-2.6h7.1v2.6Zm8.21,1.12h1.3a2.4,2.4,0,0,0,1.3-.39V28.63a6,6,0,0,1-1.3,3.74,6,6,0,0,1-1.3-3.74ZM71.6,17.18a1.3,1.3,0,1,1,2.6,0v.09a10.58,10.58,0,0,0-2.6,3.33Zm-9.52,0a1.3,1.3,0,1,1,2.6,0v3.42a10.58,10.58,0,0,0-2.6-3.32Zm.55,14a6,6,0,0,1-.55-2.5V18.8a9.36,9.36,0,0,1,.55,12.33ZM55.28,15.87A9.35,9.35,0,0,1,61,17.81v3.75a6.8,6.8,0,0,0-12.49,3.72v3.35a6,6,0,0,1-.55,2.51,9.4,9.4,0,0,1,7.35-15.26Zm0,15.1A5.69,5.69,0,1,1,61,25.28,5.69,5.69,0,0,1,55.28,31ZM36.36,2.42a1.3,1.3,0,0,1,2.6,0V28.63a6,6,0,0,1-1.3,3.74,6,6,0,0,1-1.3-3.74Zm-9.52,0a1.3,1.3,0,0,1,2.6,0V7.08a2.4,2.4,0,0,0-1.3-.39h-1.3Zm2.6,6.7a1.3,1.3,0,0,1-1.3,1.3h-1.3V7.81h1.3A1.3,1.3,0,0,1,29.45,9.12Zm-10.82,1.3a1.3,1.3,0,0,1,0-2.6h7.1v2.6Zm8.21,1.12h1.3a2.4,2.4,0,0,0,1.3-.39V28.63a6,6,0,0,1-1.3,3.74,6,6,0,0,1-1.3-3.74Zm-9.52,5.64a1.3,1.3,0,1,1,2.6,0v3.42a10.58,10.58,0,0,0-2.6-3.33Zm.55,14a6,6,0,0,1-.55-2.51V18.8a9.36,9.36,0,0,1,.55,12.33Zm-7.35,3.55a9.41,9.41,0,1,1,5.69-16.89v3.75a6.81,6.81,0,1,0,0,7.42A7.13,7.13,0,0,0,17.07,32,9.37,9.37,0,0,1,10.52,34.69Zm0-3.72a5.69,5.69,0,1,1,5.69-5.69A5.69,5.69,0,0,1,10.52,31Zm7.95,1.19a10.54,10.54,0,0,0,1.63-2.53,3.42,3.42,0,0,0,6,1.16,7.17,7.17,0,0,0,1.3,2.4,6,6,0,0,1-8.89-1Zm10.45,1a7.17,7.17,0,0,0,1.3-2.4,3.41,3.41,0,0,0,5.35,0,7.17,7.17,0,0,0,1.3,2.4,6,6,0,0,1-8,0Zm13.49,1.5a6,6,0,0,1-4-1.5,7.17,7.17,0,0,0,1.3-2.4,3.42,3.42,0,0,0,6-1.16,10.54,10.54,0,0,0,1.63,2.53A6.05,6.05,0,0,1,42.42,34.69Zm12.86,0A9.37,9.37,0,0,1,48.74,32,7.13,7.13,0,0,0,49.58,29,6.79,6.79,0,0,0,61,29a7.12,7.12,0,0,0,.84,3A9.37,9.37,0,0,1,55.28,34.69Zm7.95-2.53a10.55,10.55,0,0,0,1.63-2.53,3.43,3.43,0,0,0,5.63,1.53v2.23a2.39,2.39,0,0,0,.14.77,6,6,0,0,1-7.39-2Zm11,1.23a1.3,1.3,0,0,1-1.3,1.3,1.27,1.27,0,0,1-.64-.19,7.23,7.23,0,0,0,1.94-2Zm-2.57.19a1.23,1.23,0,0,1,0-.19V25.28a9.37,9.37,0,0,1,2.6-6.48v9.83A6.05,6.05,0,0,1,71.64,33.58Zm16.17-4.94V25.28a6.8,6.8,0,0,0-12.49-3.72V17.81a9.39,9.39,0,0,1,15.1,7.48v3.35a3.44,3.44,0,0,0,6.13,2.16,7.17,7.17,0,0,0,1.3,2.4,6.05,6.05,0,0,1-10-4.56Zm15.58,6.06a6,6,0,0,1-4-1.5,7.17,7.17,0,0,0,1.3-2.4,3.42,3.42,0,0,0,6-1.16,10.55,10.55,0,0,0,1.63,2.53A6.05,6.05,0,0,1,103.39,34.69Zm12.86,0A9.37,9.37,0,0,1,109.71,32a7.13,7.13,0,0,0,.84-3.05A6.79,6.79,0,0,0,122,29,7.13,7.13,0,0,0,122.8,32,9.37,9.37,0,0,1,116.26,34.69Zm18.92-6.06a6.05,6.05,0,0,1-11,3.53,10.54,10.54,0,0,0,1.63-2.53,3.45,3.45,0,0,0,6.75-1V25.28a1.3,1.3,0,0,1,2.6,0Z"
              fill="#293f94"
            />
            <path
              d="M91.34,96a10.68,10.68,0,0,0-10.9.59,2.41,2.41,0,0,0-4.75.61v32a2.42,2.42,0,1,0,4.84,0V114.42A10.68,10.68,0,0,0,94.87,99a10.79,10.79,0,0,0-3.52-3m-10.81,9.47a5.86,5.86,0,0,1,5.85-5.85,5.78,5.78,0,0,1,2.71.67A5.91,5.91,0,0,1,91,101.93a5.79,5.79,0,0,1,1.2,3.56,5.85,5.85,0,0,1-11.7,0Z"
              fill="#293f94"
            />
            <path
              d="M62.65,94.8A10.7,10.7,0,0,0,52,105.48v3.87a2,2,0,1,1-4,0v-5.43a5.72,5.72,0,0,0-5.63-5.72H37.14v-1A5.83,5.83,0,1,0,31.31,103h1v3.88a4.41,4.41,0,0,1-8.81,0v-1.44a10.59,10.59,0,0,0-2.2-6.5,10.67,10.67,0,0,0-8.48-4.19A10.63,10.63,0,0,0,6.87,96.6a2.41,2.41,0,0,0-4.75.61v32a2.42,2.42,0,1,0,4.84,0V114.42a10.63,10.63,0,0,0,13.72-1.73,9.23,9.23,0,0,0,16.46-5.76V103h5.15a.88.88,0,0,1,.88.88v5.69h0a6.8,6.8,0,0,0,12.29,3.76,10.64,10.64,0,0,0,7.18,2.79,2.42,2.42,0,0,0,0-4.84,5.85,5.85,0,0,1-5.32-3.43H70.92a2.42,2.42,0,0,0,2.42-2.42A10.7,10.7,0,0,0,62.65,94.8M68,103.07H57.33a5.84,5.84,0,0,1,10.64,0ZM32.31,98.21h-1a1,1,0,1,1,1-1Zm-19.5,13.13a5.85,5.85,0,1,1,0-11.7,5.78,5.78,0,0,1,2.71.67,5.91,5.91,0,0,1,1.93,1.63,5.8,5.8,0,0,1,1.2,3.56A5.86,5.86,0,0,1,12.81,111.33Z"
              fill="#293f94"
            />
            <path
              d="M5.88,73V61.63a3.94,3.94,0,1,1,7.88,0V73a2.42,2.42,0,1,0,4.84,0V61.63a3.94,3.94,0,1,1,7.88,0v7.58h0a6.8,6.8,0,0,0,12.27,3.45A10.64,10.64,0,0,0,46,75.45a2.42,2.42,0,0,0,0-4.84,5.85,5.85,0,0,1-5.32-3.43H54.23a2.42,2.42,0,0,0,2.42-2.42,10.69,10.69,0,1,0-21.37,0v3.87a2,2,0,1,1-4,0v-7a8.77,8.77,0,0,0-15.14-6A8.73,8.73,0,0,0,5.5,54,2.41,2.41,0,0,0,1,55.27V73a2.42,2.42,0,1,0,4.84,0M40.64,62.35a5.84,5.84,0,0,1,10.64,0Z"
              fill="#293f94"
            />
            <path
              d="M95.73,62.35a2.42,2.42,0,0,0-2.42,2.42v3.87a2,2,0,1,1-4,0V66h0V42.06a2.42,2.42,0,1,0-4.84,0V64.77h0v3.87a2,2,0,1,1-4,0V56.5a2.41,2.41,0,0,0-4.75-.61,10.57,10.57,0,0,0-1-.58,10.69,10.69,0,1,0,2.22,17.36,6.79,6.79,0,0,0,9.89,1.18,6.81,6.81,0,0,0,11.21-5.2V64.77a2.42,2.42,0,0,0-2.42-2.42m-20,2.42a5.85,5.85,0,1,1-5.85-5.85,5.78,5.78,0,0,1,2.71.67,5.92,5.92,0,0,1,1.93,1.63A5.8,5.8,0,0,1,75.73,64.77Z"
              fill="#293f94"
            />
          </svg>
        </div>
        <div class="col-md-4">
          <aside id="text-2" class="widget widget_text">
            <div class="textwidget">
              <p>
                <strong>
                  {{ this.$store.state.generalInformation.companyName }}
                </strong>
                <br />
                {{ this.$store.state.generalInformation.companyAddress }}
                <br />
                {{ this.$store.state.generalInformation.companyCity }}
                <br />
                {{ this.$store.state.generalInformation.companyNumber }}
                <br />
                <a
                  :href="
                    'mailto:' +
                    this.$store.state.generalInformation.companyEmail
                  "
                  >{{ this.$store.state.generalInformation.companyEmail }}</a
                >
              </p>
            </div>
          </aside>
          <aside
            id="socialnetworkwidget-2"
            class="widget widget_socialnetworkwidget"
          >
            <div class="jld-social-network-widget clearfix">
              <span class="icon_fb">
                <a
                  href="http://www.facebook.com/atlmealprep"
                  class="fa fa-facebook-f"
                  target="_blank"
                ></a>
              </span>
              <span class="icon_tw">
                <a
                  href="https://twitter.com/atlantamealprep"
                  class="fa fa-twitter"
                  target="_blank"
                ></a>
              </span>
              <span class="icon_instagram">
                <a
                  href="http://instagram.com/atlantamealprep"
                  class="fa fa-instagram"
                  target="_blank"
                ></a>
              </span>
            </div>
          </aside>
        </div>
        <div class="col-md-6">
          <div class="site-info">
            © 2020 Atlanta Meal Prep, LLC | Converted to SPA & extended by
            <a href="https://solcode.net">Solcode</a>
          </div>
        </div>
      </div>
      <a class="back-to-top scrollme" href="#top" style="display: none;">
        <i class="fa fa-arrow-up fa-lg" aria-hidden="true"></i>
      </a>
    </footer>
    <script>
      window.fbAsyncInit = function () {
        FB.init({
          appId: '188340579004510',
          autoLogAppEvents: true,
          xfbml: true,
          version: 'v7.0',
        })
      }
    </script>
  </div>
</template>

<script>
import Newsletter from './../components/newsletters.vue'
import mobileLeftPanel from './../components/wizard/leftPanel.vue'
import { createOrLoadCart } from './../components/apiFunctions.js'

export default {
  components: {
    Newsletter,
    mobileLeftPanel,
  },
  data() {
    return {
      navBack: false,
      navBarShow: true,
      mobileLeftPanel: false,
    }
  },
  created() {
    const self = this

    // navbar
    $nuxt.$on('base-back-nav-toggle', (toggleBool) => {
      self.navBack = toggleBool
    })
    $nuxt.$on('nav-bar-toggle', (toggleBool) => {
      self.navBarShow = toggleBool
    })
  },
  mounted() {
    createOrLoadCart(this.$axios, this.$store)

    const self = this
    this.checkMobileLeftPanel()
    window.onresize = () => {
      self.checkMobileLeftPanel()
    }

    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset
      if (this.prevScrollpos > currentScrollPos) {
        if (currentScrollPos !== 0) {
          document.getElementById('navbar').style.top = '0px'
        } else if (currentScrollPos === 0 || currentScrollPos < 0) {
          document.getElementById('navbar').style.top = '0px'
        } else {
          document.getElementById('navbar').style.top = '0px'
        }
      } else {
        document.getElementById('navbar').style.top = '-79px'
      }
      if (currentScrollPos <= 0) {
        document.getElementById('navbar').style.top = '0px'
      }
      this.prevScrollpos = currentScrollPos
    }

    // login to api
    this.login()
    this.getGeneralInfo()
    this.getPricesInfo()
    this.loadMealMenus()
    // alert(this.$store.getters['getPriceByMealCount'](10))
  },
  methods: {
    // check the mobile
    checkMobileLeftPanel() {
      if (window.innerWidth <= 1282) {
        this.mobileLeftPanel = true
      }
    },
    async login() {
      await this.$axios.$post(
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlLogin,
        {
          email: this.$store.state.apiConfiguration.publicEmail,
          password: this.$store.state.apiConfiguration.publicPassword,
          mode: this.$store.state.apiConfiguration.loginMode,
        }
      )
    },
    async getGeneralInfo() {
      const lol = await this.$axios.$get(
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlGeneralSettings
      )
      this.$store.commit('generalInformation/setCompanyInfo', lol)
    },
    async getPricesInfo() {
      const prices = await this.$axios.$get(
        this.$store.state.apiConfiguration.baseUrl +
          this.$store.state.apiConfiguration.urlPrices
      )
      this.$store.commit('setPriceAndSales', prices.data[0])
    },
    sendGetBackEvent() {
      $nuxt.$emit('mobile-back-to-homepage')
    },
    toggleHamburger() {
      $nuxt.$emit('mobile-menu-toggle')
    },
    logOut() {
      this.$store.commit('setLogedIn', false)
      this.$router.push({
        path: '/',
      })
    },
    async loadMealMenus() {
      const menus = await this.$axios.$get(
        this.$store.state.apiConfiguration.baseUrl +
        this.$store.state.apiConfiguration.urlMenus
      )

      this.$store.commit('wizard/setMealMenus', menus)
    },
  },
}
</script>

<style scoped>
.mobile-cart-icon {
  display: none;
}

.navbar-c {
  position: fixed;
  transition: 200ms ease;
  background-color: white;
  left: 0;
  top: 0;
  width: 100%;
}

.navbar {
  float: right !important;
}

.nav-back-mobile {
  display: none;
}

.nav-standard {
  font-family: Nunito, Helvetica, sans-serif;
  font-size: 14px;
  font-size: 1.4rem;
}

.nav-green-no-hover {
  color: #34bc89;
  border-right: 0.25px solid #3c3c3c;
}

.nav-green-no-hover:hover {
  background-color: transparent !important;
  color: #3db889;
}

.cart-icon {
  float: right;
  margin-top: 20px;
  margin-left: 16px;
  cursor: pointer;
}

.cart-icon {
  transition: 200ms ease;
}

.cart-icon path {
  transition: 200ms ease;
}

.cart-icon:hover path {
  fill: #25cc8d;
}

.logout-icon {
  float: right;
  margin-top: 28px;
  margin-left: 20px;
  cursor: pointer;
}

.logout-icon path {
  transition: 250ms ease;
  fill: #3c3c3c;
}

.logout-icon:hover path {
  fill: #575151;
}

.border-right {
  border-right: 0.25px solid #3c3c3c;
}

@media only screen and (max-width: 1282px) {
  #navbar {
    z-index: 60;
  }
  .logo-svg {
    width: 186px;
  }
  .site-header .container {
    position: relative;
    height: 56px;
  }
  .home-link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .hamburger-icon {
    position: absolute;
    top: 12px;
    left: 8px;
    margin: 10px;
  }
  .hamburger-part {
    width: 18px;
    height: 3px;
    background: #0a0b11;
    border-radius: 3px;
    margin-top: 3px;
  }
  .hamburger-part:first-child {
    margin-top: 0px;
  }
  .mobile-cart-icon {
    display: block;
    position: absolute;
    top: 9px;
    right: 8px;
    margin: 12px;
  }
  .cart-icon {
    display: none;
  }
  .nav-back-mobile {
    display: block;
    position: fixed;
    left: 0px;
    top: 0px;
    height: 56px;
    width: 100%;
    background: white;
    z-index: 65;
  }
  .nav-back-mobile p {
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 56px;
    text-align: center;
    text-transform: uppercase;
    color: #3c3c3c;
  }
  .arrow-back {
    position: absolute;
    left: 16px;
    top: 16px;
  }
  .popup-bg {
    position: absolute;
  }
  .logout-icon {
    display: none;
  }
}
</style>
