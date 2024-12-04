package hk.burunduchan.dto

import hk.burunduchan.model.Board
import java.time.LocalDateTime

data class ThreadDto(
    val id: Int,
    val title: String,
    val board: Board,
    val blob: String? = null,
    val timestamp: LocalDateTime = LocalDateTime.now()
)

