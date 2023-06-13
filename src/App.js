import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


/*


function App()
{
  return(
    <>
      <h1 
          className="bg-primary-subtle
                    jusytify-content-center
                    text-dark
                    p-2 react">
                      Story Of CDAC, Mumbai
      </h1>
      <div className="alert alert-success">
        <h3>Chapter 1</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti nesciunt unde non vel voluptas id. Consequatur, nulla sunt obcaecati quasi vel nesciunt nihil necessitatibus accusamus a pariatur! Id soluta cumque, ullam eligendi odit sapiente veniam. Quia, quasi! Laboriosam quo mollitia repellat culpa ex dolores debitis expedita cum voluptatibus iure.        
      </div>
      <div className="alert alert-success">
        <h3>Chapter 1</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti nesciunt unde non vel voluptas id. Consequatur, nulla sunt obcaecati quasi vel nesciunt nihil necessitatibus accusamus a pariatur! Id soluta cumque, ullam eligendi odit sapiente veniam. Quia, quasi! Laboriosam quo mollitia repellat culpa ex dolores debitis expedita cum voluptatibus iure.        
      </div>
      <div className="alert alert-success">
        <h3>Chapter 1</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti nesciunt unde non vel voluptas id. Consequatur, nulla sunt obcaecati quasi vel nesciunt nihil necessitatibus accusamus a pariatur! Id soluta cumque, ullam eligendi odit sapiente veniam. Quia, quasi! Laboriosam quo mollitia repellat culpa ex dolores debitis expedita cum voluptatibus iure.        
      </div>
      <div className="alert alert-success">
        <h3>Chapter 1</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti nesciunt unde non vel voluptas id. Consequatur, nulla sunt obcaecati quasi vel nesciunt nihil necessitatibus accusamus a pariatur! Id soluta cumque, ullam eligendi odit sapiente veniam. Quia, quasi! Laboriosam quo mollitia repellat culpa ex dolores debitis expedita cum voluptatibus iure.        
      </div>
    </>
  )
}

---------------------------------------------------------------------------------------------------------------
we are doing repeatative task here if we have to reuse it we can user define tag
*/

function App()
{
  return(
    <>
      <h1 
          className="bg-primary-subtle
                    jusytify-content-center
                    text-dark
                    p-2 react">
                      Story Of CDAC, Mumbai
      </h1>
      <div className="alert alert-success">
        <h3>Chapter 1</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti nesciunt unde non vel voluptas id. Consequatur, nulla sunt obcaecati quasi vel nesciunt nihil necessitatibus accusamus a pariatur! Id soluta cumque, ullam eligendi odit sapiente veniam. Quia, quasi! Laboriosam quo mollitia repellat culpa ex dolores debitis expedita cum voluptatibus iure.        
      </div>
      <Chapter />
    </>
  )
}

function Chapter()
{
  return(
    <>
      <div className="alert alert-success">
        <h3>Chapter 1</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sed provident explicabo nam nisi dolor! Numquam corrupti perferendis ipsum, dolorum cumque saepe magni enim tempora iste amet quam ipsam corporis.
      </div>
    </>
  )
}
export default App;
