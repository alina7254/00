package hk.burunduchan.repository

import hk.burunduchan.dto.BoardDto
import hk.burunduchan.model.Board
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface BoardRepository : JpaRepository<Board, String> {
    fun findAllByBoard(board: BoardDto) : List<Board>
    fun findByName(name: String) : Board?

}
