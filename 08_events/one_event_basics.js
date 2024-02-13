// document.getElementById('owl').onclick = function() {
  //   alert("owl clicked")
  // }   // this function not provide the proper features also not a good approach.

  // attachEvent
  //jQuery - on

  // typ,timestamp,defaultPrevented
  // target, toElement,srcElement, currentTarget
  // clientX, clientY, screenX, screenY
  //altkey, ctrlkey, shiftKey, keycode

  // There are two type of Event Propagation, like event bubbling and event capturing --> bubbling means event work according to the child node to parent node or capturing means parent to child.

  // document.getElementById('images').addEventListener('click', function(e) {
  //   console.log("click inside the ul");
  // }, false)

  // document.getElementById('owl').addEventListener('click', function(e) {
  //   console.log("owl clicked");
  //   e.stopPropagation();
  // }, false)

  // document.getElementById('google').addEventListener('click', function(e){
  //   console.log("google clicked");
  //   e.preventDefault();
  //   e.stopPropagation();
  // }, false)

  document.querySelector('#images').addEventListener('click', function(e) {
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
      let removeIt = e.target.parentNode
      removeIt.remove();     // directly use the remove() method.
    }
    // removeIt.parentNode.removeChild(removeIt);      //  this is another way here first you select current attributes parent node after the use the removeChild() method to remove the perticular attributes.
  }, false)
