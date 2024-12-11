package hk.burunduchan.dto

import kotlinx.serialization.Serializable

@Serializable
data class ThreadDto(
    val id: Int,
    val title: String,
    val board: String,
    val blob: String?,
    val timestamp: String
)

