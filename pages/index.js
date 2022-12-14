import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React,{useState} from 'react'
import Tree from './Tree'
export default function Home() {

 const treeData=[
  {
    id:'0',
    label:'Electronic',
    child:[
      {
         id:'0-0',
    label:'Laptops',
    child:[
      {
        id:'0-0-0',
        label:'core-i7',
      }
    ]
      },
      {
         id:'0-1',
    label:'Androids',
    child:[
      
    ]
      },
      {
         id:'0-2',
    label:'Gaming Accessories',
    child:[
      
    ]
      },
    ]
  },
  {
    id:'1',
    label:'Grocery',
    child:[
      {
         id:'1-0',
    label:'Makeup',
    child:[
      
    ]
      },
      {
         id:'1-1',
    label:'Something',
    child:[
      
    ]
      },
    ]
  },
  {
    id:'2',
    label:'Foods',
    child:[
      {
         id:'2-0',
    label:'Fruites',
    child:[
      
    ]
      },
      {
         id:'2-1',
    label:'Vegitables',
    child:[
      
    ]
      }
    ]
  },
 ]
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
    <div className="">
      <h1>Tree Structure</h1>
    <div className="">
    <Tree treeData={treeData}/>
    </div>
    </div>
    </div>
  )
}
