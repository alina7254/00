package hk.burunduchan.repository

import hk.burunduchan.model.Thread
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param

@Repository
interface ThreadRepository : JpaRepository<Thread, Int> {
    @Query("SELECT t FROM Thread t WHERE t.board.id = :boardId")
    fun findAllByBoardId(@Param("boardId") boardId: Int): List<Thread>
    @Query("SELECT t FROM Thread t WHERE t.board.name = :title")
    fun findAllByBoardTitle(@Param("title") title: String): List<Thread>
}
