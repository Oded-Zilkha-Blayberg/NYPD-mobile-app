  async function sendReportToServer(report) {
    const response = await fetch(`http://siton-backend-securityapp3.apps.openforce.openforce.biz/reports`, {
      method: 'POST', 
      // mode: 'no-cors', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(report) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  };

  export default sendReportToServer;


