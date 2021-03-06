

const Toast = ({msg, handleShow, bgColor}) => {
  return (
      <div>
          <div className={`toast show position-fixed text-light ${bgColor}`} 
         style = {{top:'5px', right:'5px', zIndex:9, minWidth:'280px'}}
       >
<div className={`toast-header ${bgColor} text-light`}>
  <strong className="mr-auto text-light">{msg.title}</strong>
  <button type="button" className="ml-4 mb-1 close justify-content-end text-light"
   data-dismiss="toast" 
   style={{outline:'none', background: 'none', border:'none'  }} onClick={handleShow}
   > &times;X</button>
</div>
<div className="toast-body">
  {msg.msg}
</div>
</div>
      </div>
  )
}

export default Toast
