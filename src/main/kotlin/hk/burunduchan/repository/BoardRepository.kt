package hk.burunduchan.repository

import hk.burunduchan.model.Board
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface BoardRepository : JpaRepository<Board, Int> {
}
