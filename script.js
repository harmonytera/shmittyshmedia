document.querySelector('.menu')?.addEventListener('click',()=>{document.body.classList.toggle('menu-open');let n=document.querySelector('.site-header nav');n.style.display=document.body.classList.contains('menu-open')?'flex':'';n.style.position='absolute';n.style.top='78px';n.style.left='0';n.style.right='0';n.style.padding='24px';n.style.background='#0d0d0d';n.style.flexDirection='column'});


const heroVideo = document.querySelector('.hero-video video');
if (heroVideo) {
  heroVideo.muted = true;
  heroVideo.setAttribute('playsinline', '');
  const startHeroVideo = () => heroVideo.play().catch(() => {});
  heroVideo.addEventListener('loadeddata', startHeroVideo, { once: true });
  heroVideo.addEventListener('canplay', startHeroVideo, { once: true });
  heroVideo.addEventListener('pause', () => {
    if (!heroVideo.ended) startHeroVideo();
  });
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && !heroVideo.ended) startHeroVideo();
  });
  startHeroVideo();
}
