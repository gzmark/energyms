import React from 'react'

const Hero2 = () => {
    return (
        <>
            <section >
                <img src="./images/logo.png" alt="Logo"/>
                <h1>Energyms </h1>
                <h2>Entrena como un Dios</h2>
                <img src="./images/statues/statue2.png" alt=""/>
            </section>

            <section id="products">
                <img src="./images/products/banner.png"/>
                <h2>Products</h2>
                      
                <div className="container">
                    <div className="box-products">
                        <div className="product">
                            <img src="./images/products/star/star.png" className="star" alt=""/>
                            <img src="./images/products/product/barra.webp" alt=""/>
                            <span>BARRA DE PROTEÍNA GOURMET C/ COLOSTRO</span>
                            <span>R$ 109,90</span>
                            <button>Comprar</button>
                        </div>

                        <div className="product">
                            <img src="./images/products/star/star.png" className="star" alt=""/>
                            <img src="./images/products/product/cre.webp" alt=""/>
                            <span>CREATINE TURBO - 300G</span>
                            <span>R$ 56,90</span>
                            <button>Comprar</button>
                        </div>

                        <div className="product">
                            <img src="./images/products/star/star.png" className="star" alt=""/>
                            <img src="./images/products/product/creat.png" alt=""/>
                            <span>CREATINA (250g) Creapure® - GROWTH SUPPLEMENTS</span>
                            <span>R$103,50</span>
                            <button>Comprar</button>
                        </div>

                        <div className="product">
                            <img src="./images/products/star/star.png" className="star" alt=""/>
                            <img src="./images/products/product/melatonina.webp" alt=""/>
                            <span>MELATONIN - MELATONINA SUBLINGUAL 120 COMP</span>
                            <span>R$ 39,90</span>
                            <button>Comprar</button>
                        </div>

                            <div className="product">
                            <img src="./images/products/star/star.png" className="star" alt=""/>
                            <img src="./images/products/product/pretreino.webp" alt=""/>
                            <span>PRÉ-TREINO LEGACY - 300G</span>
                            <span>R$ 129,90</span>
                            <button>Comprar</button>
                        </div>

                        <div className="product">
                            <img src="./images/products/star/star.png" className="star" alt=""/>
                            <img src="./images/products/product/termo.webp" alt=""/>
                            <span>TERMOGÊNICO THERMO FLAME 60 CAPS - KIT C/ 3 UNID</span>
                            <span>R$ 78,90</span>
                            <button>Comprar</button>
                        </div>

                        <div className="product">
                            <img src="./images/products/star/star.png" className="star" alt=""/>
                            <img src="./images/products/product/whey.png" alt=""/>
                            <span>(TOP) WHEY PROTEIN CONCENTRADO (1KG) - GROWTH SUPPLEMENTS</span>
                            <span>R$99,00 </span>
                            <button>Comprar</button>
                        </div>

                        <div className="product">
                            <img src="./images/products/star/star.png" className="star" alt=""/>
                            <img src="./images/products/product/whey.webp" alt=""/>
                            <span>WHEY DRINK GOURMET - PRONTO PARA BEBER - 1 UNID</span>
                            <span>R$ 13,99</span>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="aboutUs">
                <h2>About Us</h2>
                <div className="container">
                    <div className="box">
                        <img src="./images/aboutUs/Talys.jpg" alt=""/>
                        <p>
                                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni dicta officia minus iure quisquam doloribus harum esse inventore architecto aperiam at suscipit rem, in repellendus cum unde itaque numquam. Dolorem!
                        </p>
                    </div>
                    <div className="box">
                        <img src="./images/aboutUs/Rafael.png" alt=""/>
                        <p>
                                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni dicta officia minus iure quisquam doloribus harum esse inventore architecto aperiam at suscipit rem, in repellendus cum unde itaque numquam. Dolorem!
                        </p>
                    </div>
                 </div>
            </section>
        </>
    )};

export default Hero2;
