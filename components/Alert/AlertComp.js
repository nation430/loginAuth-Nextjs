
const Toast = ({title, body} ) => {

    return (
      <div  className="show"  >
  
        <div >
          <strong className="me-auto">{title}</strong>
          
        </div>
  
        <div className="toast-body">
          {
            typeof(body) === 'string'
            ? body
            : 
            <ul>
              {
                body?.map((text, index) => (
                  <li key={index}>{text}</li>
                ))
              }
            </ul>
          }
        </div>
  
      </div>
    )
  }
  
  export default Toast
  