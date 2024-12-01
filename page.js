export const page = `
<nav class="grey darken-3" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Map</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#"></a></li>
      </ul>
      <ul id="nav-mobile" class="side-nav">
        <li><a href="#"></a></li>
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>
  </nav>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br>
      <h1 class="header center white-text">Map Demo</h1>
   <p class="row center grey-text">Using Leaflet JS library. This is also touch compatible!.</p> 
    </div>
  </div>


  <div class="container">
    <div class="section">
      <p id="status"></p>
      <div class="row">
		  <div id="map"></div>
      </div>

    </div>
    <br><br>
  </div>
`;