// UoM CAS Authentication Service - Browser-only implementation
const AUTHENTICATION_SERVICE_URL = "http://studentnet.cs.manchester.ac.uk/authenticate/";
const AUTHENTICATION_LOGOUT_URL = "http://studentnet.cs.manchester.ac.uk/systemlogout.php";

class AuthService {
  // Check if user is authenticated from localStorage
  checkAuth() {
    const user = localStorage.getItem('uom_user');
    return user ? JSON.parse(user) : null;
  }

  // Send user for authentication
  login() {
    // Generate unique ticket
    const csticket = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
    // Save ticket
    localStorage.setItem('uom_csticket', csticket);
    
    // Redirect to UoM auth service
    const currentUrl = window.location.origin + window.location.pathname;
    const authUrl = `${AUTHENTICATION_SERVICE_URL}?url=${encodeURIComponent(currentUrl)}&csticket=${csticket}&version=3&command=validate`;
    
    window.location.href = authUrl;
  }

  // Process authentication callback
  processCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const csticket = urlParams.get('csticket');
    const username = urlParams.get('username');
    const fullname = urlParams.get('fullname');

    if (csticket && username && fullname) {
      const storedTicket = localStorage.getItem('uom_csticket');
      
      if (storedTicket === csticket) {
        // Save user info
        const user = {
          username,
          fullname,
          authenticatedAt: Date.now()
        };
        localStorage.setItem('uom_user', JSON.stringify(user));
        localStorage.removeItem('uom_csticket');
        
        // Clean URL
        window.history.replaceState({}, document.title, window.location.pathname);
        
        return user;
      }
    }
    return null;
  }

  // Logout
  logout() {
    localStorage.removeItem('uom_user');
    localStorage.removeItem('uom_csticket');
    window.location.href = AUTHENTICATION_LOGOUT_URL;
  }
}

export default new AuthService(); 