new Vue({


    el:'#vue-app',
    data:{

        health:100,
        ended:false,
        number:0
    },

   methods: {
       punch() {

           this.number=Math.floor((Math.random() * 10) + 20)
           this.health-=10;

           if(this.health<=0)
           {
               this.ended=true;
           }
       },

       restart(){

            this.health=100;
            this.ended=false;
       }
    
   },

    computed:{


    }








});