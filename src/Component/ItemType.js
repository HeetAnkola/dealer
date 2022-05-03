import React, { Component } from 'react'
import Item from './Item'

export class ItemType extends Component {
  render() {
    return (
      <div className='container my-3'>
        <div className="row">
          <div className="col md-4">
        <Item title="Xiaomi 11 Lite NE 5G (Jazz Blue 6GB RAM 128 GB Storage)..." link="https://amzn.to/3MH24bZ" imglink="https://m.media-amazon.com/images/I/71XmlboxNZL._SL1500_.jpg"/></div>
        <div className="col md-4">
        <Item title="GLUN Bolt Electronic Portable Fishing Hook Type Digital..." link="https://amzn.to/3vZ7Rml" imglink="https://m.media-amazon.com/images/I/41g2KGfKWGL.jpg"/></div>
        <div className="col md-4">
        <Item title="Prime Membership" link="https://amzn.to/3KCgicS" imglink="https://m.media-amazon.com/images/G/31/marketing/prime/inline-prime-logo._CB485922431_.png"/>
        <Item title="Audible Membership" link="https://www.amazon.in/hz/audible/mlp?ie=UTF8&linkCode=ll2&tag=homies03-21&linkId=7641632f10f37af5e737ed932a1a4ee9&language=en_IN&ref_=as_li_ss_tl" imglink="https://images-eu.ssl-images-amazon.com/images/G/31/AudibleIN/2020/AMZ/subnav/audible_logo_subnav_427x100._CB424619030_.jpg"/></div>
        <div className="col md-4">
        <Item title="Zero to One" link="https://amzn.to/3LDZkvM" imglink="https://m.media-amazon.com/images/I/41ltkuJcb1L.jpg"/></div>
        <div className="col md-4">
        <Item title="The Complete Stories of Sherlock Holmes" link="https://amzn.to/3vBoVAb" imglink="https://m.media-amazon.com/images/I/51zPorhZ19L.jpg"/></div>
        <div className="col md-4">
        <Item title="ASUS VivoBook 14 (2021), 14-inch (35.56 cm) FHD, Intel ..." link="https://amzn.to/3vD2iLz" imglink="https://m.media-amazon.com/images/I/71WuDXpTAlL._SL1500_.jpg"/></div>
        <div className="col md-4">
        <Item title="MSI Modern 14, Intel i5-10210U, 14 FHD IPS-Level 60Hz ..." link="https://amzn.to/37cH2mw" imglink="https://m.media-amazon.com/images/I/81uEixOREFL._SL1500_.jpg"/></div>
        <div className="col md-4">
        <Item title="pTron Bassbuds Duo New Bluetooth 5.1 Wireless Headphone..." link="https://amzn.to/3OUxX2z" imglink="https://m.media-amazon.com/images/I/519uMzMXJVL._SL1100_.jpg"/></div>
        </div></div>
    )
  }
}

export default ItemType