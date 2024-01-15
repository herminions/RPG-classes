class heroClass{
    constructor(heroName, heroAge, heroClass){
        this.heroName = heroName
        this.heroAge = heroAge
        this.heroClass = heroClass
        
        switch(this.heroClass){
            case "warrior":
                this.heroAttackType = "a sword"
                break

            case "wizard":
                this.heroAttackType = "magic"
                break
                
            case "monk":
                this.heroAttackType = "martial arts"
                break
                
            case "ninja":
                this.heroAttackType = "a shuriken"
                break
                
        }
    }

    attack(){
        console.log(`The ${this.heroClass} ${this.heroName} attacked using ${this.heroAttackType}.`)
    }
}

let hero = new heroClass("herminions", 21, "ninja",)

hero.attack()

