<!--In Route Navigation we use '<a> tag'to navigate btw routes -->

<!-- POINTS TO REMEMBER    <a> tag only used in markup part-->

<!-- POINTS TO REMEMBER TO NAVIGATE ON USER INTERACTION WE DO IT IN <script> part  -->
    <script>
        import {goto} from '$app/navigation'

        const handleClick = () => {
            goto('PATH TO BE GIVEN')
        }
    </script>

<button on:click={handleClick}>Navigate</button>