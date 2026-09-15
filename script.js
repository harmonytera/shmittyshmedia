document.querySelector('.menu')?.addEventListener('click',()=>{document.body.classList.toggle('menu-open');let n=document.querySelector('.site-header nav');n.style.display=document.body.classList.contains('menu-open')?'flex':'';n.style.position='absolute';n.style.top='78px';n.style.left='0';n.style.right='0';n.style.padding='24px';n.style.background='#0d0d0d';n.style.flexDirection='column';});

const heroVideo=document.querySelector('.hero-video video');
if(heroVideo){
  const heroSegments=['assets/hero-00.mp4','assets/hero-01.mp4','assets/hero-02.mp4','assets/hero-03.mp4','assets/hero-04.mp4'];
  let segmentIndex=0;
  heroVideo.muted=true;
  heroVideo.setAttribute('playsinline','');
  const playSegment=()=>heroVideo.play().catch(()=>{});
  const loadSegment=(index)=>{
    segmentIndex=index;
    heroVideo.src=heroSegments[segmentIndex];
    heroVideo.load();
    heroVideo.addEventListener('canplay',playSegment,{once:true});
  };
  heroVideo.addEventListener('ended',()=>loadSegment((segmentIndex+1)%heroSegments.length));
  heroVideo.addEventListener('pause',()=>{if(!heroVideo.ended)playSegment();});
  loadSegment(0);
}

const aboutGalleryItems=document.querySelectorAll('.about-gallery-item');
const imageLightbox=document.querySelector('.image-lightbox');
if(aboutGalleryItems.length&&imageLightbox){
  const lightboxImage=imageLightbox.querySelector('img');
  const closeButton=imageLightbox.querySelector('.lightbox-close');
  aboutGalleryItems.forEach((item)=>{
    item.addEventListener('click',()=>{
      const source=item.dataset.full;
      const thumb=item.querySelector('img');
      lightboxImage.src=source;
      lightboxImage.alt=thumb?.alt||'Expanded gallery image';
      imageLightbox.showModal();
    });
  });
  closeButton?.addEventListener('click',()=>imageLightbox.close());
  imageLightbox.addEventListener('click',(event)=>{if(event.target===imageLightbox)imageLightbox.close();});
}
