import { Component } from 'react'
import { View } from '@tarojs/components'
import Header from './components/header'
import Swiper from './components/swiper'
import Entrance from './components/entrance'
import Action from './components/action'
import Footer from './components/footer'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        {/* Header */}
        <Header />
        {/* Swiper */}
        <Swiper />
        {/* Entrance */}
        <Entrance />
        {/* Action */}
        <Action />
        {/* Footer */}
        <Footer />
      </View>
    )
  }
}
