let originalData=null;
let musicData=null;



function formatMyData(musicData){
      console.log('musicData:',musicData);
      let htmlOutput='';
      let arr=musicData["data"];
      //lets add header for our grid
      htmlOutput +=`<div class="header"><div class="headerItem"><a href="#" onclick="doSort('title')">Title</a></div>
      <div class="headerItem"><a href="#" onclick="doSort('artist')">Artist</a></div>
      <div class="headerItem"><a href="#" onclick="doSort('release')">Released</a></div>
      <div class="headerItem">Genre</div>
      <div class="headerItem">Player</div>
      </div>`;
      //for(let i=0; i<arr.length; i++){
        arr.forEach(e=>{
        htmlOutput +='<div class="eachItem">';
              htmlOutput +='<div class="title">'+e.title+'</div>'; 
              htmlOutput +='<div class="artist">'+e.artist+'</div>';  
              htmlOutput +='<div class="album">'+e.released+'</div>';
              htmlOutput +='<div class="released">'+e.genre+'</div>';
              htmlOutput +='<div class="player">'
               htmlOutput +=`<audio controls>
                    <source src="music/${e.fileName}" type="audio/wav">
                   </audio>`;
              htmlOutput +='</div>';
              htmlOutput +='</div>';

              document.getElementById('musicList').innerHTML=htmlOutput;

      });

}

function loadMusicData(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "json_music_data.txt", true);
    xhr.send();

    xhr.onreadystatechange = function() {
      //This is where it will wait for server to come back with response
      //readySate can be 0,1,2,3
      if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           //document.getElementById("demo").innerHTML = xhr.responseText;
           musicData=JSON.parse(xhr.responseText);
           //originalData=musicData;
           originalData =Object.assign({}, musicData);
           //console.log(musicData);
           formatMyData(musicData);
      }
      else{
        //some kind of error happened
      }
      /*
      xhr.onload=function(){
        //success event handler
      };
      xhr.onerror=function(){
        //error event handler
      }
      */
    };
}

function searchAuto(obj){
   console.log(obj);
   console.log(obj.id);
   let searchTitle=null, searchArtist=null, searchRelease=null;
   switch(obj.id){
     case 'searchTitle':
      searchTitle=obj.value;
      console.log(searchTitle);
      break;

      case 'searchArtist':
      searchArtist=obj.value;
      break;

      case 'searchRelease':
      searchRelease=obj.value;
      break;

      default:
       break;
   }
   
   musicData.data=originalData.data.filter(
    function(e,i){
        if(searchTitle){
            return e.title.includes(searchTitle);
        }
        if(searchArtist){
           return e.artist.includes(searchArtist);
        }
        if(searchRelease){
          return e.released.toString().includes(searchRelease.toString());
        }
     }
  );

  formatMyData(musicData);

}
function searchMusic(){
    //console.log('search clicked');
    let title=document.getElementById('searchTitle').value;
    let artist=document.getElementById('searchArtist').value;
    let release=document.getElementById('searchRelease').value;

    //console.log(title,artist,release);

    musicData.data=musicData.data.filter(
      function(e,i){
          if(title){
              return e.title==title;
          }
          else if(artist){
             return e.artist==artist;
          }
          else if(release){
            return e.released==release;
          }
          
      }
    );

    formatMyData(musicData);


}


let titleAsc=true, artistAsc=true, releaseAsc=true;
function doSort(val){
   //console.log(val);
   let sortCase=null;
   switch(val){
      case 'title':
       titleAsc=!titleAsc;
       musicData.data.sort(
         function(a,b){
           if(titleAsc){
              if(a["title"] > b["title"]){
                return 1;
              }
              else{
                return -1;
              }
            }
            else{
              if(a["title"] < b["title"]){
                return 1;
              }
              else{
                return -1;
              }
            }
           
         }
       );
         
      break;

      case 'artist':
      artistAsc=!artistAsc;
      musicData.data.sort(
        function(a,b){
          if(artistAsc){
             if(a["artist"] > b["artist"]){
               return 1;
             }
             else{
               return -1;
             }
           }
           else{
             if(a["artist"] < b["artist"]){
               return 1;
             }
             else{
               return -1;
             }
           }
          
        }
      );
       
      break;

      case 'release':
      releaseAsc=!releaseAsc;
      musicData.data.sort(
        function(a,b){
          if(releaseAsc){
             if(a["released"] > b["released"]){
               return 1;
             }
             else{
               return -1;
             }
           }
           else{
             if(a["released"] < b["released"]){
               return 1;
             }
             else{
               return -1;
             }
           }
          
        }
      );
       
      break;

      default:
      break;

    }

    formatMyData(musicData);
  }



loadMusicData();

