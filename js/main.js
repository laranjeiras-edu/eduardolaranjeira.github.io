/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navAlternar = document.getElementById('nav-alternar'),
      navFechar = document.getElementById('nav-fechar')

if(navAlternar){
    navAlternar.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navFechar){
    navFechar.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVER MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADICIONAR DESFOQUE AO CABEÇALHO ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contatosForm = document.getElementById('contatos-form')
      contatosMensagem = document.getElementById('contatos-mensagem')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_vhm8p5f', 'template_c47gf79', '#contatos-form', 'Bm6a_hKuadaWuwKMl')
        .then(() =>{
            contatosMensagem.textContent = 'Mensagem Enviada com Sucesso ✅'

            setTimeout(() =>{
                contatosMensagem.textContent = ''
            }, 5000)

            contatosForm.reset()

        }, () =>{
            contatosMensagem.textContent = 'Mensagem não enviada ❌'
        })
}

contatosForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.inicio__data, .inicio__social, .contatos__container, .footer__container`)
sr.reveal(`.inicio__imagem`, {origin: 'bottom'})
sr.reveal(`.sobre__data, .habilidades__data`, {origin: 'left'})
sr.reveal(`.sobre__imagem, .habilidades__content`, {origin: 'right'})
sr.reveal(`.servicos__card, .projetos__card`, {interval: 100})


