import { getDatabase } from '../../config/database.js'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const db = await getDatabase()
    const count = await db.collection('ulp_data').countDocuments()
    
    res.status(200).json({ count })
  } catch (error) {
    console.error('Failed to fetch ULP count:', error)
    res.status(500).json({ error: 'Failed to fetch ULP count' })
  }
}