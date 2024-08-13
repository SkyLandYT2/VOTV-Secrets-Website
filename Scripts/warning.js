var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

document.write(`
<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <div class="background-box"></div>
    <header></header>
    <h3 style="text-align:center; font-style:oblique;">Credits:</h3>
    <p style="text-align:center;color:red;">Note: This game has not been fully released and there may be secrets and easter eggs that have not been discovered which may render this archive outdated.</p>
    <p style="text-align:center;color:lawngreen;"><a href="https://mrdrnose.itch.io/votv">Voices of the Void:</a></p>
    <p style="text-align:center;color:lawngreen;">If any new secret or hidden easter egg pops up you may contact me through <a href="https://discord.gg/JA95KNQtHA">here:</a></p>
    <div class="image-zoom" onclick="closeImage()">
        <img id="zoomed-img" src="" alt="Zoomed Image">
    </div>
</body>
</html>
`);

}