var like = document.getElementById("click_me"),
  count = 0;
  like.onclick = function() 
{
  count += 1;
  like.innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i>: ' + count;
};
