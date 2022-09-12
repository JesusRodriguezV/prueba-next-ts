import type { NextApiRequest, NextApiResponse } from 'next'
import Card from '../../types/card.d'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Card[]>
) {
  res.status(200).json([
    { id:1, title: 'prueba'},
    { id:2, body: 'un contenido'},
    { id:3, title: 'una imagen', img: 'https://via.placeholder.com/200x100'}
  ])
}