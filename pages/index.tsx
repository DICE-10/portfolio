import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './components/Layout'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { useEffect } from 'react'
const Home: NextPage = () => {
  useEffect(() => {
    if (process.browser) {
        gsap.registerPlugin(TextPlugin)
        setAnimation();
    }
}, []);
  
  const setAnimation = () => {
    gsap.to("#txt-typewriter", {
      duration: 8, //アニメーション時間（秒）
      text: {
        value: "Don’t play what’s there,<br/>play what’s not there.<br/> Don’t play what you know,<br/>play what you don’t know.<br/>I have to change,<br/>It’s like a curse.", //表示するテキスト
        delimiter: "",  //区切り文字
      },
      ease: "ease",  // アニメーションのタイミング・進行割合を指定する
    })
  }
  return (
    <Layout title="Home">
      <div className="fs-grid m-grid-col-2 fs-wfull fs-mcenter">
        <div className="fs-outer fs-mwfull fs-wfull ts-center">
          <div className="fs-inner fs-aspectWIDE-hor fs-wfull">
            <div className="ts-l30xl ts-8xl font-w-bold fs-my5 fs-py5 textin">
              <div className="textin">
                <span className="lr-in">Developer</span>
              </div>
            </div>
            <div className="ts-l30xl ts-8xl font-w-bold fs-my5 fs-py5">
              <div className="textin">
                <span className="lr-in">Programmer</span>
              </div>
            </div>
          </div>
        </div>
        <div className="fs-outer fs-mwfull fs-wfull">
          <div className="fs-inner text-white fs-aspectWIDE-hor bg-black fs-wfull">
            <div id="txt-typewriter" className="fs-py10 fs-px20 ts-l15xl ts-3xl ">
              
            </div>
          </div>
        </div>
      </div>
      <div className="fs-outer jc-center">
        <div className="fs-inner fs-talgin-c ">
          <h1 className="ts-7xl font-w-bolder fstick">Service</h1>
          <span>サービス</span>
        </div>
      </div>
      <div className="fs-grid m-grid-col-3 fs-w6_8 fs-mcenter ">
        <div className="fs-outer jc-center fs-mwfull fs-wfull ">
          <div className="fs-inner fs-aspectVGA-vert fs-w8_12 ">
            <div className="fs-outer jc-center">
              <div className="fs-inner fs-talgin-c">
                <h1 className="ts-4xl font-w-bold">DIRECTION</h1>
                <span>ディレクション</span>
              </div>
            </div>
            <div className="fs-outer">
              <div className="fs-inner">
                
              </div>
            </div>
          </div>
        </div>
        <div className="fs-outer jc-center fs-mwfull fs-wfull ">
          <div className="fs-inner fs-aspectVGA-vert fs-w8_12 ">
            <div className="fs-outer jc-center">
              <div className="fs-inner fs-talgin-c">
                <h1 className="ts-4xl font-w-bold">DESIGN</h1>
                <span>デザイン</span>
              </div>

            </div>
          </div>
        </div>
        <div className="fs-outer jc-center fs-mwfull fs-wfull ">
          <div className="fs-inner fs-aspectVGA-vert fs-w8_12 ">
            <div className="fs-outer jc-center">
              <div className="fs-inner fs-talgin-c">
                <h1 className="ts-4xl font-w-bold">CODING</h1>
                <span>コーディング</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fs-grid m-grid-col-2 fs-wfull">
        <div className="fs-outer jc-center fs-mwfull fs-wfull ">
          <div className="fs-inner fs-aspectHD-hor bg-crimson fs-w10_12">
            <span className="ts-7xl text-white">1</span>
          </div>
        </div>
        <div className="fs-outer jc-center fs-mwfull fs-wfull">
          <div className="fs-inner fs-aspectHD-hor bg-darkviolet fs-w10_12">
            <span className="ts-7xl text-white">2</span>
          </div>
        </div>
      </div>
      <div className="fs-grid m-grid-col-2 fs-wfull">
        <div className="fs-outer jc-center fs-mwfull fs-wfull m-order1 order2">
          <div className="fs-inner fs-aspectHD-hor bg-lime fs-w10_12">

          </div>
        </div>
        <div className="fs-outer jc-center fs-mwfull fs-wfull m-order2 order1">
          <div className="fs-inner fs-aspectHD-hor bg-cornflowerblue fs-w10_12">

          </div>
        </div>
      </div>
      <div className="fs-grid m-grid-col-2 fs-wfull">
        <div className="fs-outer jc-center fs-mwfull fs-wfull ">
          <div className="fs-inner fs-aspectHD-hor bg-crimson fs-w10_12">

          </div>
        </div>
        <div className="fs-outer jc-center fs-mwfull fs-wfull">
          <div className="fs-inner fs-aspectHD-hor bg-darkviolet fs-w10_12">

          </div>
        </div>
      </div>
      <div className="fs-grid m-grid-col-2 fs-wfull">
        <div className="fs-outer jc-center fs-mwfull fs-wfull ">
          <div className="fs-inner fs-aspectHD-hor bg-lime fs-w10_12">

          </div>
        </div>
        <div className="fs-outer jc-center fs-mwfull fs-wfull">
          <div className="fs-inner fs-aspectHD-hor bg-cornflowerblue fs-w10_12">

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
