import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div className="fs-grid m-grid-col-2 fs-wfull">
        <div className="fs-outer fs-mwfull fs-wfull ">
          <div className="fs-inner fs-aspectHD-hor bg-crimson fs-wfull">

          </div>
        </div>
        <div className="fs-outer fs-mwfull fs-wfull">
          <div className="fs-inner fs-aspectHD-hor bg-darkviolet fs-wfull">

          </div>
        </div>
      </div>
      <div className="fs-outer jc-center">
        <div className="fs-inner fs-talgin-c ">
          <h1 className="ts-7xl font-w-bolder">Service</h1>
          <span>サービス</span>
        </div>
      </div>
      <div className="fs-grid m-grid-col-3 fs-wfull ">
        <div className="fs-outer jc-end fs-mwfull fs-wfull ">
          <div className="fs-inner fs-aspectVGA-vert fs-w8_12 ">
            <div className="fs-outer">
              <div className="fs-inner fs-talgin-c">
                <h1 className="ts-4xl font-w-bold">DIRECTION</h1>
                <span>ディレクション</span>
              </div>
            </div>
            <div className="fs-outer">
              <div className="fs-inner">
                お客様の
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
        <div className="fs-outer jc-start fs-mwfull fs-wfull ">
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
