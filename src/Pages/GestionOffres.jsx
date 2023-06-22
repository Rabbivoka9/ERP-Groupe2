import Header_entreprise from "../Composants/Navbar_Entreprise"
import Bar from "../Composants/BarRech"
import GgOffres from "../Composants/GestionOffres"


function GestionCotation (){

       return (

              
              <div className="tout1">
            
              <div className="bordu">
                  <Header_entreprise/>
                  <Bar/>
              </div>

              <div>
               
                  <GgOffres/>
                

                

              </div>
              
      
              
          </div>

       )
} export default GestionCotation