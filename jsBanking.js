class Bank{
    constructor(name, branch){
        this.name=name
        this.branch=branch
        this.initialAmount=2000
    }
    question(){
        let withdraw = document.getElementById('withdraw_')
        let deposit = document.getElementById('deposit_')
        let result = document.getElementById('result_')
        result.innerHTML=`<h3>welcome please choose either of the following</h3>`
        console.log(this.name, this.branch)
        withdraw.onclick=()=>{
            this.withdraw()
        }
        deposit.onclick=()=>{
            this.deposit()
        }
    }
    withdraw(){
        let amount = Number(prompt('Enter the amount'))
        let result2 = document.getElementById('result2_')
        if(isNaN(amount)){
            alert('enter the values in numbers')
            this.withdraw()
        }else if(amount<100){
            alert('please enter a value 100 and above')
            this.withdraw()
        }if(!isNaN(amount) && amount>99 && amount<this.initialAmount){
            let balance = this.initialAmount-amount
            result2.innerHTML = `<h3>your amount ${amount} is successfully withdrawn, your bank balance is ${this.initialAmount-amount}</h3>`
            this.initialAmount=balance
            console.log(result)
            let isbankAgain = prompt('press yes if you want to bank again or press cancel')
            if(isbankAgain=='yes' || isbankAgain=='YES'){
                this.question()
            }else if(isbankAgain=='cancel'||isbankAgain=='CANCEL'){
                result2.innerHTML = `<h3>Thank you for banking with us!</h3>`
            }
        }
        if(amount>this.initialAmount){
            result2.innerHTML = `<h3>insufficient balance</h3>`
        }
    }
    deposit(){
        let amount = Number(prompt('enter the amount you want to deposit'))
        let result2 = document.getElementById('result2_')
        if(isNaN(amount)){
            console.log('please enter a valid number')
            this.deposit()
        }else if(amount<100){
            alert('please enter a value 100 and above')
            this.deposit()
        }
        if(!isNaN(amount) && amount>99){
            this.initialAmount+=amount
            result2.innerHTML = `<h3>your ${amount} is successfully deposited, bank balance is ${this.initialAmount}</h3>`
            console.log(result)
            this.question()
        }
    }
}
const bank=new Bank('Mariyamman Indian bank', 'Thangachiyamma patti')
bank.question(true)
