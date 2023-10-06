<template>
    <div class="bg-white h-full w-[282px] fixed top-0 left-0">
      <!-- Left menu -->
      <div class="flex flex-col p-[30px] text-left space-y-[30px]">
        <div class="flex flex-row items-baseline">
            <div class="flex flex-row items-center">
                <div class="w-[19.83px] h-[20px] bg-primary rounded-full mr-[3px]"></div>
                <div class="w-[11.33px] h-[11.43px] bg-[#889DFC] rounded-full mr-[10px]"></div>
            </div>
            <p class="text-3xl font-semibold">Socially</p>
        </div>
        <div class="flex flex-col space-y-[5px] font-medium text-body text-[15px]">
            <div class="flex flex-row items-center space-x-[12px] hover:bg-[#EAEDFB] h-[54px] rounded-xl">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0267 3.78667L4.83999 9.38667C3.63999 10.32 2.66666 12.3067 2.66666 13.8133V23.6933C2.66666 26.7867 5.18666 29.32 8.27999 29.32H23.72C26.8133 29.32 29.3333 26.7867 29.3333 23.7067V14C29.3333 12.3867 28.2533 10.32 26.9333 9.4L18.6933 3.62667C16.8267 2.32 13.8267 2.38667 12.0267 3.78667Z" stroke="#5B5D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 23.9867V19.9867" stroke="#5B5D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Home</p>
            </div>
            <div class="flex flex-row items-center space-x-[12px] hover:bg-[#EAEDFB] h-[54px] rounded-xl">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3333 25.3333H10.6667C5.33332 25.3333 2.66666 24 2.66666 17.3333V10.6667C2.66666 5.33333 5.33332 2.66667 10.6667 2.66667H21.3333C26.6667 2.66667 29.3333 5.33333 29.3333 10.6667V17.3333C29.3333 22.6667 26.6667 25.3333 21.3333 25.3333H20.6667C20.2533 25.3333 19.8533 25.5333 19.6 25.8667L17.6 28.5333C16.72 29.7067 15.28 29.7067 14.4 28.5333L12.4 25.8667C12.1867 25.5733 11.6933 25.3333 11.3333 25.3333Z" stroke="#5B5D67" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.33334 10.6667H22.6667" stroke="#5B5D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.33334 17.3333H17.3333" stroke="#5B5D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Messages</p>
            </div>
            <div class="flex flex-row items-center space-x-[12px] hover:bg-[#EAEDFB] h-[54px] rounded-xl">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.1867 28.8267C23.0133 29.1733 21.6267 29.3333 20 29.3333H12C10.3733 29.3333 8.98667 29.1733 7.81334 28.8267C8.10667 25.36 11.6667 22.6266 16 22.6266C20.3333 22.6266 23.8933 25.36 24.1867 28.8267Z" stroke="#5B5D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 2.66667H12C5.33334 2.66667 2.66667 5.33333 2.66667 12V20C2.66667 25.04 4.18667 27.8 7.81334 28.8267C8.10667 25.36 11.6667 22.6266 16 22.6266C20.3333 22.6266 23.8933 25.36 24.1867 28.8267C27.8133 27.8 29.3333 25.04 29.3333 20V12C29.3333 5.33333 26.6667 2.66667 20 2.66667ZM16 18.8933C13.36 18.8933 11.2267 16.7467 11.2267 14.1067C11.2267 11.4667 13.36 9.33333 16 9.33333C18.64 9.33333 20.7733 11.4667 20.7733 14.1067C20.7733 16.7467 18.64 18.8933 16 18.8933Z" stroke="#5B5D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.7733 14.1067C20.7733 16.7467 18.64 18.8933 16 18.8933C13.36 18.8933 11.2267 16.7467 11.2267 14.1067C11.2267 11.4667 13.36 9.33334 16 9.33334C18.64 9.33334 20.7733 11.4667 20.7733 14.1067Z" stroke="#5B5D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Profile</p>
            </div>
            <div class="flex flex-row items-center space-x-[12px] hover:bg-[#EAEDFB] h-[54px] rounded-xl">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1867 7.84001H6.81332C4.53332 7.84001 2.66667 9.70665 2.66667 11.9867V27.1333C2.66667 29.0667 4.05334 29.8933 5.74667 28.9467L10.9867 26.0267C11.5467 25.72 12.4533 25.72 13 26.0267L18.24 28.9467C19.9333 29.8933 21.32 29.0667 21.32 27.1333V11.9867C21.3333 9.70665 19.4667 7.84001 17.1867 7.84001Z" stroke="#5B5D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.3333 11.9867V27.1333C21.3333 29.0667 19.9467 29.88 18.2533 28.9467L13.0134 26.0267C12.4534 25.72 11.5467 25.72 10.9867 26.0267L5.74667 28.9467C4.05334 29.88 2.66667 29.0667 2.66667 27.1333V11.9867C2.66667 9.70665 4.53332 7.84001 6.81332 7.84001H17.1867C19.4667 7.84001 21.3333 9.70665 21.3333 11.9867Z" stroke="#5B5D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M29.3333 6.81332V21.96C29.3333 23.8933 27.9467 24.7067 26.2533 23.7733L21.3333 21.0267V11.9867C21.3333 9.70666 19.4667 7.84001 17.1867 7.84001H10.6667V6.81332C10.6667 4.53332 12.5333 2.66667 14.8133 2.66667H25.1867C27.4667 2.66667 29.3333 4.53332 29.3333 6.81332Z" stroke="#5B5D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Saved post</p>
            </div>
            <div class="flex flex-row items-center space-x-[12px] hover:bg-[#EAEDFB] h-[54px] rounded-xl">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 29.3333H20C26.6667 29.3333 29.3333 26.6667 29.3333 20V12C29.3333 5.33333 26.6667 2.66666 20 2.66666H12C5.33333 2.66666 2.66667 5.33333 2.66667 12V20C2.66667 26.6667 5.33333 29.3333 12 29.3333Z" stroke="#5B5D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Marketplace</p>
            </div>
            <span class="pb-[87px]"></span>
        </div>
        <!-- Download app -->
        <div class="flex flex-col bg-[#EDEFFB] rounded-md w-[222px] h-[185px] text-left">
          <div class="flex flex-row items-center px-[15px] py-[16px]">
                <div class="w-[19.83px] h-[20px] bg-primary rounded-full mr-[3px]"></div>
                <div class="w-[11.33px] h-[11.43px] bg-[#889DFC] rounded-full mr-[10px]"></div>
            </div>
          <p class="text-[18px] px-[15px] font-medium">Stay updated with the Socially mobile app</p>
          <p class="text-xl px-[15px] pt-[30px] underline underline-offset-[10px] text-primary hover:text-[#0906AF] hover:font-semibold">Download Now</p>
        </div>
      </div>
    </div>
</template>

<script setup>

</script>
