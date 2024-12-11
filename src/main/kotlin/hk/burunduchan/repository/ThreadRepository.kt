package hk.burunduchan.repository

import hk.burunduchan.model.Thread
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface ThreadRepository : JpaRepository<Thread, String> {
    @Query("SELECT t FROM Thread t WHERE t.board.name = :boardName")
    fun findAllByBoardName(@Param("boardName") boardName: String): List<Thread>
    @Query("SELECT t FROM Thread t WHERE t.board.name = :title")
    fun findAllByBoardTitle(@Param("title") title: String): List<Thread>
}
