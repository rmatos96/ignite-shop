import Link from 'next/link'
import React from 'react'
import { ImageContainer } from '../styles/pages/success'
import { SuccessContaienr } from '../styles/pages/success'

export default function Success() {
  return (
    <SuccessContaienr>
      <h1>Compra efetuada!</h1>

      <ImageContainer>
        
      </ImageContainer>

      <p>
        Uhull <strong>Rodrigo Matos</strong>, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa.
      </p>

      <Link href='/'>
        Voltar ao catálogo
      </Link>
    </SuccessContaienr>
  )
}
