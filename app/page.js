export default function Home() {

  const student = {
    name: "Om Prakash Bandi",
    roll: "2400032058",
    department: "Computer Science and Engineering"
  };

  return (
    <div style={{
      maxWidth: "400px",
      margin: "50px auto",
      padding: "20px",
      textAlign: "center",
      border: "1px solid #ddd",
      borderRadius: "10px",
      fontFamily: "Arial",
      background: "#fafafa"
    }}>

    
      <img 
        src="/public/OIP.webp"
        alt="Profile"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "20px"
        }}
      />

      <h2 style={{marginBottom: "15px"}}>Student Details</h2>

      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Roll Number:</strong> {student.roll}</p>
      <p><strong>Department:</strong> {student.department}</p>

    </div>
  );
}
