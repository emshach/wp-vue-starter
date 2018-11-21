<template id="search">
<div>
    <wp-header></wp-header>
    <div class="container">
    
        <div class="row">        
            <div class="col-lg-12">
                <h1 class="main-title">Search Results</h1>
                <the-loop 
                    v-bind:posts="posts" 
                    v-bind:pagers="pagers">
                </the-loop>  
            </div><!--end col-lg-12-->
        </div><!--end row-->

    </div><!--end container-->
    <wp-footer></wp-footer>
<div>

</template>