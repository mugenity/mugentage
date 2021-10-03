import React from "react"
import loader from "../../Images/loader.gif"

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        backgroundColor: "#FFF",
      }}
    >
      <img src={loader} alt="loader" width="150px" height="150px" />
    </div>
  )
}

export default Loader
