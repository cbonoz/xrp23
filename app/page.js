'use client'

import React, { useState, } from 'react'
import { Button, Spin, Row, Col } from 'antd';
import { APP_DESC, APP_NAME } from './constants';
import { CheckCircleTwoTone } from '@ant-design/icons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// TODO: change
const CHECKLIST_ITEMS = [
  "High throughput data validation tied to the Ripple EVM",
  "Immutable record of data history",
  "No user accounts or vendor agreements required"
];

// const HERO_IMAGE = 'https://assets-v2.lottiefiles.com/a/b2e71c48-1173-11ee-af24-e38df89b1a8a/esieSHm0ao.gif'
const HERO_IMAGE = 'https://mloegv6p7igz.i.optimole.com/cb:c8bm~2d7d7/w:470/h:467/q:mauto/ig:avif/f:best/https://syndrometech.net/wp-content/uploads/2020/11/Data-Center_-Syndrome.gif'


const Home = () => {
  const router = useRouter()

  return <div className='home-section'>
    <Row className='home-section'>
      <Col span={12}>
        <div className='prompt-section'>
          {/* <img src={logo} className='home-logo'/><br/> */}
          {APP_DESC}
        </div>
        {CHECKLIST_ITEMS.map((item, i) => {
          return (
            <p key={i}>
              <CheckCircleTwoTone twoToneColor="#00aa00" />
              &nbsp;
              {item}.
            </p>
          );
        })}
        <div>
        </div>
        <div>
          <Button className='standard-btn' size="large" type="primary" onClick={() => router.push('/create')}>
            Start auditing your data
          </Button>&nbsp;
        </div>
      </Col>
      <Col span={12}>
        <Image width={300} height={475} className='hero-image' src={HERO_IMAGE} alt={APP_NAME}/>
      </Col>
    </Row>

  </div>

}

export default Home