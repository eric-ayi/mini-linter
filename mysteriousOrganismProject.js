// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  function pAequorFactory(number, array) {
      return {
        //this is a key-value pair.
        specimenNum: number,
        dna: array,
        // the method below randomly select a base in the object's dna property and change the current base to a different base.
        mutate() {
          const randIndex = Math.floor(Math.random() * this.dna.length);
          let newBase = returnRandBase();
          while (this.dna[randIndex] === newBase) {
            newBase = returnRandBase();
          }
          this.dna[randIndex] = newBase;
          return this.dna;
          
        },
        
        // This method compares the DNA sequences of different organisms
        compareDNA(otherOrg) {
          let counter = 0;
          for (let i = 0; i < this.dna.length; i++) {
            let otherOrganism = otherOrg.dna[i];
            let thisOrganism = this.dna[i];
            if(otherOrganism === thisOrganism){
              counter += 1;
            } 
          } 
          const percentageDna = Math.round((counter/this.dna.length)*100);
          console.log(`specimen #1 and specimen #2 have ${percentageDna}% DNA in common`) 
        },
    
        // Chance of the P. aequor's survival with more C & G bases
        willLikelySurvive() {
          let baseCG = 0;
          for (let i = 0; i < this.dna.length; i++) {
            if(this.dna[i] === 'C'){
              baseCG += 1;
            }
            if(this.dna[i] === 'G'){
              baseCG += 1;
            }
          }
          const percentageDna = Math.round((baseCG/this.dna.length)*100)
          //console.log(baseCG);
          //console.log("DNA array contains this percentage of 'C' and 'G' bases:", percentageDna);
          if(percentageDna >= 60) {
            return true;
          }
          else {return false;}
        }
      }
    };
    
      // setting up one instance
    let organism = pAequorFactory(2, mockUpStrand());
    
    console.log(organism.compareDNA(pAequorFactory(2, mockUpStrand())));
    
   
    
    // Array of 30 instances 
    const organismsSurvived = [];  
    let i = 1;
    while (organismsSurvived.length < 30) {
      let newOrganism = pAequorFactory(i, mockUpStrand());
      if(newOrganism.willLikelySurvive() === true) {
      organismsSurvived.push(newOrganism);
    }
      i++;
    }
    
    console.log(organismsSurvived);