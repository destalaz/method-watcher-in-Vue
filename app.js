new Vue({
    el:"#vue-app",
    data:{
        newData:{
            employee:'',
            salary:0, 
        },
        empGroup: [
            {
                empName:"A",
                salary:5000
            },
            {
                empName:"B",
                salary:4000
            }
        ]  
    },
    methods:{
        addEmp:function(){
            this.empGroup.push({
                empName: this.newData.empName,
                salary: this.newData.salary
            });
            this.newData.empName = '';
            this.newData.salary = 0;
        },
        showMessage:function(){
            console.log("Send data...")
        } 
    } ,
        computed:{
             // reduce ทำหน้าที่จัดการผลรวมของ array 
             // แยกมาจัดการด้านการคำนวณ
            summation:function(){
                var sum = this.empGroup.reduce(function(value,data) {
                    return value + Number(data.salary);
                }, 0);
                return sum;
            },
            avg:function(){
                var sum = this.empGroup.reduce(function(value,data) {
                    return value + Number(data.salary);
                }, 0);
                return sum/this.empGroup.length;
            },
        },
        watch: {
            //หลังจากทำ avg เสร็จ
            summation:function(){
                this.showMessage();
            }
        }
   
});