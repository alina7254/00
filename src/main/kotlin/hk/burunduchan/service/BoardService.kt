package hk.burunduchan.service

import hk.burunduchan.dto.BoardDto
import hk.burunduchan.model.Board
import hk.burunduchan.repository.BoardRepository
import org.springframework.stereotype.Service

@Service
class BoardService(private val boardRepository: BoardRepository) {

    fun getAllBoards(): List<BoardDto> {
        return boardRepository.findAll().map { BoardDto(it.id, it.name) }
    }

    fun getThreadsByBoard(boardName: String): List<T> {
        return boardId != null) {
            boardRepository.findAll().filter { it.id == boardId }.map { it.id!! }

    }


    fun createBoard(name: String): BoardDto {
        val board = Board(name = name)
        val savedBoard = boardRepository.save(board)
        return BoardDto(savedBoard.id, savedBoard.name)
    }
}

